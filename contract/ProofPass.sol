// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ProofPass
 * @dev Blockchain-Based Internship Verification System
 *
 * Authorized companies/organizations can issue internship records.
 * Students can view internships linked to their wallet.
 * Anyone can verify an internship using its unique ID.
 */
contract ProofPass {

    // ============================================================
    // STRUCTURES
    // ============================================================

    struct Internship {
        uint256 internshipId;
        address student;
        string companyName;
        string role;
        uint256 startDate;
        uint256 endDate;
        string projectDescription;
        address issuer;
        uint256 issuedAt;
        bool revoked;
    }

    // ============================================================
    // STATE VARIABLES
    // ============================================================

    uint256 private nextInternshipId = 1;

    address public owner;

    // Authorized companies / organizations
    mapping(address => bool) public authorizedIssuers;

    // Internship ID => Internship record
    mapping(uint256 => Internship) private internships;

    // Student wallet => Internship IDs
    mapping(address => uint256[]) private studentInternships;

    // ============================================================
    // EVENTS
    // ============================================================

    event IssuerAuthorized(
        address indexed issuer
    );

    event IssuerRevoked(
        address indexed issuer
    );

    event InternshipIssued(
        uint256 indexed internshipId,
        address indexed student,
        address indexed issuer,
        string companyName
    );

    event InternshipRevoked(
        uint256 indexed internshipId,
        address indexed issuer
    );

    // ============================================================
    // MODIFIERS
    // ============================================================

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only owner can perform this action"
        );
        _;
    }

    modifier onlyAuthorizedIssuer() {
        require(
            authorizedIssuers[msg.sender],
            "Not an authorized issuer"
        );
        _;
    }

    // ============================================================
    // CONSTRUCTOR
    // ============================================================

    constructor() {
        owner = msg.sender;

        // Contract deployer is automatically an authorized issuer
        authorizedIssuers[msg.sender] = true;
    }

    // ============================================================
    // ISSUER MANAGEMENT
    // ============================================================

    /**
     * @dev Authorize a company/organization wallet.
     */
    function authorizeIssuer(
        address issuer
    ) external onlyOwner {
        require(
            issuer != address(0),
            "Invalid issuer address"
        );

        authorizedIssuers[issuer] = true;

        emit IssuerAuthorized(issuer);
    }

    /**
     * @dev Remove issuer authorization.
     */
    function revokeIssuer(
        address issuer
    ) external onlyOwner {
        require(
            issuer != address(0),
            "Invalid issuer address"
        );

        authorizedIssuers[issuer] = false;

        emit IssuerRevoked(issuer);
    }

    // ============================================================
    // ISSUE INTERNSHIP
    // ============================================================

    /**
     * @dev Issue a new internship record.
     */
    function issueInternship(
        address student,
        string calldata companyName,
        string calldata role,
        uint256 startDate,
        uint256 endDate,
        string calldata projectDescription
    )
        external
        onlyAuthorizedIssuer
        returns (uint256)
    {
        require(
            student != address(0),
            "Invalid student address"
        );

        require(
            bytes(companyName).length > 0,
            "Company name required"
        );

        require(
            bytes(role).length > 0,
            "Role required"
        );

        require(
            endDate >= startDate,
            "Invalid internship dates"
        );

        uint256 internshipId = nextInternshipId;

        internships[internshipId] = Internship({
            internshipId: internshipId,
            student: student,
            companyName: companyName,
            role: role,
            startDate: startDate,
            endDate: endDate,
            projectDescription: projectDescription,
            issuer: msg.sender,
            issuedAt: block.timestamp,
            revoked: false
        });

        studentInternships[student].push(internshipId);

        nextInternshipId++;

        emit InternshipIssued(
            internshipId,
            student,
            msg.sender,
            companyName
        );

        return internshipId;
    }

    // ============================================================
    // VERIFY INTERNSHIP
    // ============================================================

    /**
     * @dev Verify whether an internship exists and is valid.
     *
     * Status:
     * 0 = Not Found
     * 1 = Active
     * 2 = Completed
     * 3 = Revoked
     */
    function verifyInternship(
        uint256 internshipId
    )
        external
        view
        returns (
            bool exists,
            bool valid,
            string memory status
        )
    {
        Internship storage internship = internships[internshipId];

        if (internship.student == address(0)) {
            return (
                false,
                false,
                "Not Found"
            );
        }

        if (internship.revoked) {
            return (
                true,
                false,
                "Revoked"
            );
        }

        if (block.timestamp > internship.endDate) {
            return (
                true,
                true,
                "Completed"
            );
        }

        return (
            true,
            true,
            "Active"
        );
    }

    // ============================================================
    // REVOKE INTERNSHIP
    // ============================================================

    /**
     * @dev Revoke an internship record.
     *
     * Only the original issuer can revoke the record.
     */
    function revokeInternship(
        uint256 internshipId
    )
        external
    {
        Internship storage internship = internships[internshipId];

        require(
            internship.student != address(0),
            "Internship does not exist"
        );

        require(
            internship.issuer == msg.sender,
            "Only original issuer can revoke"
        );

        require(
            !internship.revoked,
            "Internship already revoked"
        );

        internship.revoked = true;

        emit InternshipRevoked(
            internshipId,
            msg.sender
        );
    }

    // ============================================================
    // GET INTERNSHIP
    // ============================================================

    /**
     * @dev Get complete internship details.
     */
    function getInternship(
        uint256 internshipId
    )
        external
        view
        returns (
            uint256 id,
            address student,
            string memory companyName,
            string memory role,
            uint256 startDate,
            uint256 endDate,
            string memory projectDescription,
            address issuer,
            uint256 issuedAt,
            bool revoked
        )
    {
        Internship storage internship = internships[internshipId];

        require(
            internship.student != address(0),
            "Internship does not exist"
        );

        return (
            internship.internshipId,
            internship.student,
            internship.companyName,
            internship.role,
            internship.startDate,
            internship.endDate,
            internship.projectDescription,
            internship.issuer,
            internship.issuedAt,
            internship.revoked
        );
    }

    // ============================================================
    // GET MY INTERNSHIPS
    // ============================================================

    /**
     * @dev Returns all internship IDs belonging to caller's wallet.
     */
    function getMyInternships()
        external
        view
        returns (uint256[] memory)
    {
        return studentInternships[msg.sender];
    }

    // ============================================================
    // GET STUDENT INTERNSHIPS
    // ============================================================

    /**
     * @dev Returns internship IDs for any student wallet.
     * Useful for public verification/front-end.
     */
    function getStudentInternships(
        address student
    )
        external
        view
        returns (uint256[] memory)
    {
        return studentInternships[student];
    }

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================

    /**
     * @dev Returns the next internship ID.
     */
    function getNextInternshipId()
        external
        view
        returns (uint256)
    {
        return nextInternshipId;
    }

    /**
     * @dev Returns whether an address is an authorized issuer.
     */
    function isAuthorizedIssuer(
        address issuer
    )
        external
        view
        returns (bool)
    {
        return authorizedIssuers[issuer];
    }
}