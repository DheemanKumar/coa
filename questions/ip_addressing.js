const allQuestions = [
  {
    "id": "Q-EXT-001",
    "topic": "Computer Networks - Flow Control",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Consider a 1 Mbps satellite channel with 50 ms round trip propagation delay. We want to send a 1000 bit frame, and we will not send a second frame until we receive acknowledgment for the first frame. What fraction of the available bandwidth are we using?",
      "options": {
        "A": "1/40",
        "B": "1/51",
        "C": "1/2",
        "D": "1/5"
      },
      "explanation": "Transmission time (Tt) = 1000 bits / 10^6 bps = 1 ms. RTT = 50 ms. Total time = Tt + RTT = 51 ms. Efficiency = Useful Time / Total Time = 1/51."
    },
    "answer": "B"
  },
  {
    "id": "Q-EXT-002",
    "topic": "Computer Networks - Error Control",
    "type": "Multiple Select",
    "difficulty": "Easy",
    "content": {
      "question": "An error-control code with minimum Hamming distance of 11 is capable of:",
      "options": {
        "A": "detecting 11 bits of error.",
        "B": "detecting 5 bits of error.",
        "C": "correcting 5 bits of error.",
        "D": "correcting 11 bits of error."
      },
      "explanation": "Distance d=11. Detection = d-1 = 10. Correction = floor((d-1)/2) = 5. Therefore, it can detect up to 10 (so 5 is included) and correct 5."
    },
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": "Q-EXT-003",
    "topic": "Computer Networks - Error Control",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Let CRC generator polynomial G(x) = 1 + x. Which of the following errors E(x) will be detected by G(x)?",
      "options": {
        "A": "E(x) = x^12 + x^11 + x^3 + x^2 + x + 1",
        "B": "E(x) = x^36 + x^5 + 1",
        "C": "E(x) = x^17 + x^5",
        "D": "E(x) = x^11 + x^2 + 1"
      },
      "explanation": "G(x) = x+1 detects all errors with an odd number of terms. A (6 terms, even), B (3 terms, odd), C (2 terms, even), D (3 terms, odd). Detected: B and D."
    },
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "Q-EXT-004",
    "topic": "Computer Networks - MAC Protocols",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Slotted aloha is a variant of the Aloha media-access protocol. In a slotted aloha system, suppose there are 5 nodes that each transmit with probability of p. What is the probability, in a given slot time, that one of the nodes successfully transmits a packet?",
      "options": {
        "A": "5p(1-p)^4",
        "B": "4p(1-p)^4",
        "C": "4(1-p)^5",
        "D": "p^5"
      },
      "explanation": "Prob of specific node success = p(1-p)^4. Total nodes = 5. Total Prob = 5 * p(1-p)^4."
    },
    "answer": "A"
  },
  {
    "id": "Q-EXT-005",
    "topic": "Computer Networks - Switching",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Consider a network of learning bridges. B sends to C, D sends to B. Now suppose if F sends to D, then which of the following nodes will receive the packet other than D?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "C",
        "D": "E"
      },
      "explanation": "Switch learns source addresses. It knows B and D. When F sends to D, if D is on a specific port known to the switch, it filters. If the switch topology connects F to others before filtering, A, B, C might receive it depending on the exact diagram (assumed flooding or shared segment behavior)."
    },
    "answer": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": "Q-EXT-006",
    "topic": "Computer Networks - Reliability",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "An upper-layer packet is split into 10 frames, each of which has an 80 percent chance of arriving undamaged. If no error control is done by the data link protocol, how many times must the message be sent on average to get the entire thing through?",
      "options": {
        "A": "7.4",
        "B": "9.3",
        "C": "6.7",
        "D": "2.4"
      },
      "explanation": "Success Probability P = 0.8^10 = 0.1073. Expected transmissions = 1/P = 1/0.1073 â‰ˆ 9.3."
    },
    "answer": "B"
  },
  {
    "id": "Q-EXT-007",
    "topic": "Computer Networks - Routing",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Suppose a router has built up a routing table. Which statements are true regarding packet forwarding?",
      "options": {
        "A": "Packet to 128.96.39.10 -> R4",
        "B": "Packet to 128.96.40.12 -> R2",
        "C": "Packet to 192.4.153.17 -> R3",
        "D": "Packet to 192.4.153.90 -> R4"
      },
      "explanation": "Based on longest prefix match logic with the provided subnet masks."
    },
    "answer": [
      "B",
      "C",
      "D"
    ]
  },
  {
    "id": "Q-EXT-008",
    "topic": "Computer Networks - CIDR",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The routing table uses longest prefix match. What are the next hops for 196.94.10.7 and 196.94.34.9?",
      "options": {
        "A": "S, T",
        "B": "S, U",
        "C": "T, T",
        "D": "T, U"
      },
      "explanation": "196.94.10.7 matches 196.94.8.0/21 (S). 196.94.34.9 matches 196.94.0.0/16 (U) as it doesn't fit /21 or /24 specifics."
    },
    "answer": "B"
  },
  {
    "id": "Q-EXT-009",
    "topic": "Computer Networks - IP Addressing",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "The valid host range that has the IP address 172.29.217.11/22 is 172.29.X.Y to 172.29.Z.P. Then X + Y + Z + P is?",
      "options": {},
      "explanation": "Range: 172.29.216.1 to 172.29.219.254. X=216, Y=1, Z=219, P=254. Sum = 690."
    },
    "answer": "690"
  },
  {
    "id": "Q-EXT-010",
    "topic": "Computer Networks - Forwarding",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "If a packet with the IP address 135.46.63.10 arrives, where does the router forward it given the CIDR table?",
      "options": {
        "A": "Interface A",
        "B": "Interface B",
        "C": "Interface C",
        "D": "Interface D"
      },
      "explanation": "Matches 135.46.60.0/22 (Range .60.0 - .63.255)."
    },
    "answer": "B"
  },
  {
    "id": "Q-EXT-011",
    "topic": "Computer Networks - Ethernet",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "In a CSMA/CD network with 10 Mbps, max distance is 2500 m. What should be the max distance if we increase data rate to 100 Mbps?",
      "options": {
        "A": "25 m",
        "B": "2500 m",
        "C": "250 m",
        "D": "25 km"
      },
      "explanation": "Distance is inversely proportional to Bandwidth for fixed collision detection constraints. 2500 / 10 = 250m."
    },
    "answer": "C"
  },
  {
    "id": "Q-EXT-012",
    "topic": "Computer Networks - Hamming Codes",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Receiver receives 1011011 codeword (Hamming 7,4 even parity). If utmost one bit error, which is true?",
      "options": {
        "A": "Recieved codeword is correct",
        "B": "Incorrect, third bit from left flipped",
        "C": "Incorrect, third bit from right flipped",
        "D": "Incorrect, first bit from left flipped"
      },
      "explanation": "Syndrome calculation points to index 5 (from right) or 3 (from left) depending on indexing convention used in problem context. Matches option B."
    },
    "answer": "B"
  },
  {
    "id": "Q-EXT-013",
    "topic": "Computer Networks - Sliding Window",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Window size of 200. Determine sequence number bits for Go-Back-N (GBN) and Selective Repeat (SR).",
      "options": {
        "A": "8 for GBN",
        "B": "8 for SR",
        "C": "9 for GBN",
        "D": "9 for SR"
      },
      "explanation": "GBN: N >= W+1 (201 -> 8 bits). SR: N >= 2W (400 -> 9 bits)."
    },
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": "Q-EXT-014",
    "topic": "Computer Networks - TCP",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Window size 3. RTO=2*RTT. Packets 1-6 sent. 3 and 6 lost. Fast retransmission enabled. How many RTTs elapse before packet 6 is transmitted again?",
      "options": {
        "A": "3",
        "B": "5",
        "C": "6",
        "D": "8"
      }
    },
    "answer": "B"
  },
  {
    "id": "Q-EXT-015",
    "topic": "Computer Networks - Ethernet Backoff",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "A and B collision. What is probability A wins third backoff race immediately after first collision of A3?",
      "options": {
        "A": "5/8",
        "B": "13/16",
        "C": "6/16",
        "D": "3/4"
      }
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-001",
    "topic": "Computer Networks - Subnetting",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "An ISP is granted a block of addresses starting with 190.100.0.0/16. The ISP wants to distribute these blocks to 2500 customers with each customer receiving 8 addresses. If the variable length subnet masking is used, what is the length of the subnet mask for the customers?",
      "options": {},
      "explanation": "Each customer needs 8 addresses. 8 = 2^3. So 3 bits are required for host ID. Subnet mask length = 32 - 3 = 29. (Also checks if 2500 customers fit: 2500 * 8 = 20,000 < 65,536 available IPs)."
    },
    "answer": "29"
  },
  {
    "id": "Q-GEN-002",
    "topic": "Computer Networks - IPv4 Header",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "An IPv4 packet has arrived with the first 8 bits as 01000010. The receiver discards the packet. What is the most likely reason?",
      "options": {
        "A": "The version number is incorrect.",
        "B": "The header length is less than the minimum limit.",
        "C": "The total length is invalid.",
        "D": "The TTL has expired."
      },
      "explanation": "First 4 bits (0100) = Version 4. Next 4 bits (0010) = Header Length (HLEN). HLEN value is 2. Actual header length = 2 * 4 bytes = 8 bytes. Minimum IPv4 header is 20 bytes (HLEN=5). Thus, packet is discarded."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-003",
    "topic": "Computer Networks - TCP Congestion",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "In the TCP slow start phase, the congestion window size increases from 1 MSS to 16 MSS. How many RTTs are required to reach 16 MSS?",
      "options": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "16"
      },
      "explanation": "Slow start doubles window every RTT. Start: 1. RTT1: 2. RTT2: 4. RTT3: 8. RTT4: 16. Total RTTs = 4."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-004",
    "topic": "Computer Networks - Application Layer",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "Which of the following application layer protocols uses UDP as the transport protocol?",
      "options": {
        "A": "SMTP",
        "B": "FTP",
        "C": "DNS",
        "D": "HTTP"
      },
      "explanation": "DNS primarily uses UDP (Port 53) for queries, though it can use TCP for zone transfers. SMTP, FTP, and HTTP use TCP."
    },
    "answer": "C"
  },
  {
    "id": "Q-GEN-005",
    "topic": "Computer Networks - Routing Algorithms",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Count-to-Infinity is a problem associated with which routing algorithm?",
      "options": {
        "A": "Link State Routing",
        "B": "Distance Vector Routing",
        "C": "Path Vector Routing",
        "D": "Hierarchical Routing"
      },
      "explanation": "Count-to-Infinity is a classic failure mode of Distance Vector protocols (like RIP) where bad news propagates slowly."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-006",
    "topic": "Computer Networks - IP Fragmentation",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "An IP packet of length 4000 bytes (including 20 byte header) travels through a network with MTU 1500 bytes. How many fragments are created?",
      "options": {},
      "explanation": "Data = 3980 bytes. Max data per fragment = 1500 - 20 = 1480. Fragment 1: 1480 data. Fragment 2: 1480 data. Remaining: 3980 - 2960 = 1020 data. Fragment 3: 1020 data. Total fragments = 3."
    },
    "answer": "3"
  },
  {
    "id": "Q-GEN-007",
    "topic": "Computer Networks - Throughput",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "A channel has a bandwidth of 4 Kbps and a propagation delay of 20 ms. The packet size is 400 bits. For a Stop-and-Wait protocol, what is the maximum throughput?",
      "options": {},
      "explanation": "Tt = 400 / 4000 = 0.1 s = 100 ms. Tp = 20 ms. Total time per packet = 100 + 2(20) = 140 ms. Throughput = 400 bits / 140 ms = 400 / 0.14 â‰ˆ 2857 bps."
    },
    "answer": "2857"
  },
  {
    "id": "Q-GEN-008",
    "topic": "Computer Networks - Checksum",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following are properties of the Internet Checksum used in IP and TCP?",
      "options": {
        "A": "It uses 1's complement arithmetic.",
        "B": "It detects all burst errors.",
        "C": "It is expensive to compute in software.",
        "D": "A result of 0 (all zeros) in calculation indicates no error."
      },
      "explanation": "Internet checksum uses 1's complement sum. If sum + checksum = all 1s (-0 in 1s comp), it is valid. All 0s usually implies error in 1s complement logic (valid is -0). It does NOT detect all burst errors."
    },
    "answer": [
      "A"
    ]
  },
  {
    "id": "Q-GEN-009",
    "topic": "Computer Networks - Ethernet",
    "type": "Numerical",
    "difficulty": "Easy",
    "content": {
      "question": "Consider a standard 10Base5 Ethernet. What is the maximum length of a segment in meters?",
      "options": {},
      "explanation": "In 10Base5 (Thick Ethernet), the '5' stands for 500 meters."
    },
    "answer": "500"
  },
  {
    "id": "Q-GEN-010",
    "topic": "Computer Networks - Sliding Window",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "In a Go-Back-N ARQ, if the window size is 63, what is the range of sequence numbers?",
      "options": {
        "A": "0 to 63",
        "B": "0 to 62",
        "C": "0 to 64",
        "D": "1 to 63"
      },
      "explanation": "Sequence numbers must be at least W + 1. If W=63, we need 64 unique numbers. Range 0 to 63."
    },
    "answer": "A"
  },
  {
    "id": "Q-GEN-011",
    "topic": "Computer Networks - Cryptography",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "In RSA cryptography, if the public key is (e, n), what corresponds to the private key?",
      "options": {
        "A": "(p, q)",
        "B": "(d, n)",
        "C": "(e, d)",
        "D": "(n, d)"
      },
      "explanation": "RSA private key is represented as (d, n), where d is the private exponent."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-012",
    "topic": "Computer Networks - HTTP",
    "type": "Multiple Select",
    "difficulty": "Easy",
    "content": {
      "question": "Which of the following HTTP methods are considered 'idempotent'?",
      "options": {
        "A": "GET",
        "B": "POST",
        "C": "PUT",
        "D": "DELETE"
      },
      "explanation": "Idempotent means multiple identical requests have the same effect as a single one. GET, PUT, DELETE are idempotent. POST is NOT (creates multiple resources)."
    },
    "answer": [
      "A",
      "C",
      "D"
    ]
  },
  {
    "id": "Q-GEN-013",
    "topic": "Computer Networks - Subnetting",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "What is the broadcast address for the subnet 200.10.5.0/28?",
      "options": {},
      "explanation": "/28 means block size of 16. Subnet starts at .0. Ends at .15. Broadcast is 200.10.5.15."
    },
    "answer": "200.10.5.15"
  },
  {
    "id": "Q-GEN-014",
    "topic": "Computer Networks - Token Bucket",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "A token bucket shaper has a capacity of 1 MB and a token arrival rate of 2 MB/s. What is the maximum burst duration if the output rate is 10 MB/s?",
      "options": {},
      "explanation": "Burst Duration S = C / (M - R). C=1MB, R=2MB/s, M=10MB/s. S = 1 / (10 - 2) = 1/8 = 0.125 sec."
    },
    "answer": "0.125"
  },
  {
    "id": "Q-GEN-015",
    "topic": "Computer Networks - TCP Header",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which flag in the TCP header is set to tear down a connection?",
      "options": {
        "A": "SYN",
        "B": "PSH",
        "C": "FIN",
        "D": "URG"
      },
      "explanation": "FIN (Finish) flag is used to terminate the connection."
    },
    "answer": "C"
  },
  {
    "id": "Q-GEN-016",
    "topic": "Computer Networks - Switching",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "In a store-and-forward switch, which delay components are present?",
      "options": {
        "A": "Processing Delay",
        "B": "Queuing Delay",
        "C": "Transmission Delay",
        "D": "Propagation Delay"
      },
      "explanation": "All four delays (Processing, Queuing, Transmission, Propagation) are present in packet switching networks."
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "id": "Q-GEN-017",
    "topic": "Computer Networks - CSMA/CD",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "A network uses CSMA/CD. The bandwidth is 10 Mbps and the maximum propagation delay is 25.6 microseconds. What is the minimum frame size in bits?",
      "options": {},
      "explanation": "Min Frame = Bandwidth * 2 * Tp. = 10 * 10^6 * 2 * 25.6 * 10^-6 = 20 * 25.6 = 512 bits."
    },
    "answer": "512"
  },
  {
    "id": "Q-GEN-018",
    "topic": "Computer Networks - OSPF",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "OSPF (Open Shortest Path First) protocol is based on which algorithm?",
      "options": {
        "A": "Bellman-Ford",
        "B": "Dijkstra",
        "C": "Floyd-Warshall",
        "D": "Prim's"
      },
      "explanation": "OSPF is a Link State protocol that uses Dijkstra's algorithm to calculate the shortest path."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-019",
    "topic": "Computer Networks - Hamming Distance",
    "type": "Numerical",
    "difficulty": "Easy",
    "content": {
      "question": "What is the Hamming distance between the codewords 101010 and 111111?",
      "options": {},
      "explanation": "XOR: 101010 ^ 111111 = 010101. Count of 1s = 3."
    },
    "answer": "3"
  },
  {
    "id": "Q-GEN-020",
    "topic": "Computer Networks - Wireless LAN",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Why does 802.11 (Wi-Fi) use CSMA/CA instead of CSMA/CD?",
      "options": {
        "A": "It is faster.",
        "B": "Collision detection is not possible in wireless due to signal fading.",
        "C": "It requires less power.",
        "D": "It has higher bandwidth."
      },
      "explanation": "In wireless, a transmitting station cannot hear other stations while transmitting due to the overwhelming power of its own signal (Hidden Terminal Problem and signal strength issues)."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-021",
    "topic": "Computer Networks - Classful Addressing",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "Which class does the IP address 225.10.1.1 belong to?",
      "options": {
        "A": "Class A",
        "B": "Class B",
        "C": "Class C",
        "D": "Class D"
      },
      "explanation": "Class D ranges from 224 to 239 (first octet)."
    },
    "answer": "D"
  },
  {
    "id": "Q-GEN-022",
    "topic": "Computer Networks - ARP",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "The protocol used to find the MAC address given an IP address is:",
      "options": {
        "A": "RARP",
        "B": "ARP",
        "C": "DHCP",
        "D": "DNS"
      },
      "explanation": "Address Resolution Protocol (ARP) resolves IP to MAC."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-023",
    "topic": "Computer Networks - Selective Repeat",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "In a Selective Repeat protocol, the sender window size is 5. Ideally, how many bits are needed for the sequence number?",
      "options": {},
      "explanation": "For SR, Window Size <= 2^(n-1). Or simply, Sequence Space >= 2 * Window Size. 2*5 = 10. Next power of 2 is 16 (4 bits). So 4 bits."
    },
    "answer": "4"
  },
  {
    "id": "Q-GEN-024",
    "topic": "Computer Networks - FTP",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following are true about FTP?",
      "options": {
        "A": "It uses two parallel TCP connections.",
        "B": "It is a stateless protocol.",
        "C": "Control connection is opened on port 21.",
        "D": "Data connection is opened on port 20."
      },
      "explanation": "FTP uses two connections: Control (21) and Data (20). It is stateful (keeps user login state)."
    },
    "answer": [
      "A",
      "C",
      "D"
    ]
  },
  {
    "id": "Q-GEN-025",
    "topic": "Computer Networks - Delay Calculation",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "A link has a propagation speed of 2x10^8 m/s and a length of 2000 km. What is the propagation delay in milliseconds?",
      "options": {},
      "explanation": "Distance = 2000 km = 2x10^6 m. Speed = 2x10^8 m/s. Delay = Distance / Speed = (2x10^6) / (2x10^8) = 10^-2 s = 10 ms."
    },
    "answer": "10"
  },
  {
    "id": "Q-GEN-026",
    "topic": "Computer Networks - Sockets",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "A socket address is a combination of:",
      "options": {
        "A": "MAC Address + IP Address",
        "B": "IP Address + Port Number",
        "C": "Port Number + MAC Address",
        "D": "IP Address + Sequence Number"
      },
      "explanation": "Socket = IP : Port."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-027",
    "topic": "Computer Networks - NAT",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following allows a home network with private IPs to access the internet using a single public IP?",
      "options": {
        "A": "DHCP",
        "B": "DNS",
        "C": "NAT",
        "D": "ARP"
      },
      "explanation": "Network Address Translation (NAT) maps private IPs to a public IP."
    },
    "answer": "C"
  },
  {
    "id": "Q-GEN-028",
    "topic": "Computer Networks - BGP",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "BGP (Border Gateway Protocol) is which type of routing protocol?",
      "options": {
        "A": "Intra-AS",
        "B": "Inter-AS",
        "C": "Link State",
        "D": "Distance Vector (pure)"
      },
      "explanation": "BGP is the standard Inter-AS (Inter-Autonomous System) protocol, often described as Path Vector."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-029",
    "topic": "Computer Networks - TCP",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which fields are present in the TCP header but NOT in the UDP header?",
      "options": {
        "A": "Sequence Number",
        "B": "Checksum",
        "C": "Window Size",
        "D": "Source Port"
      },
      "explanation": "Both provide Process-to-process (via ports). TCP adds Sequence, Ack, Window, etc."
    },
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "Q-GEN-030",
    "topic": "Computer Networks - CRC",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "If the data word is 1001 and the divisor is 101, what is the CRC remainder?",
      "options": {},
      "explanation": "Append two zeros (divisor length - 1) to data: 100100. Divide 100100 by 101. 101 goes into 100 -> 1. Remainder 011... Result of XOR division yields remainder 11 (binary)."
    },
    "answer": "11"
  },
  {
    "id": "Q-GEN-031",
    "topic": "Computer Networks - IPv6",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "What is the size of an IPv6 address?",
      "options": {
        "A": "32 bits",
        "B": "64 bits",
        "C": "128 bits",
        "D": "256 bits"
      },
      "explanation": "IPv6 addresses are 128 bits long."
    },
    "answer": "C"
  },
  {
    "id": "Q-GEN-032",
    "topic": "Computer Networks - Switching",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which switching technique treats the entire message as a data unit?",
      "options": {
        "A": "Circuit Switching",
        "B": "Packet Switching",
        "C": "Message Switching",
        "D": "Datagram Switching"
      },
      "explanation": "Message switching stores and forwards the entire message as one unit."
    },
    "answer": "C"
  },
  {
    "id": "Q-GEN-033",
    "topic": "Computer Networks - TCP Connection",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "Host A sends a TCP SYN packet with Sequence Number 100. Host B receives it and sends a SYN-ACK. What is the Acknowledgment Number in the SYN-ACK packet?",
      "options": {},
      "explanation": "SYN consumes 1 sequence number. So ACK = SEQ + 1 = 101."
    },
    "answer": "101"
  },
  {
    "id": "Q-GEN-034",
    "topic": "Computer Networks - Backoff Algorithm",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "In the Binary Exponential Backoff algorithm, after the 3rd collision, a node chooses a random number K from the interval:",
      "options": {
        "A": "[0, 3]",
        "B": "[0, 7]",
        "C": "[0, 15]",
        "D": "[0, 31]"
      },
      "explanation": "Interval is [0, 2^n - 1]. For n=3, 2^3 - 1 = 7. Interval is [0, 7]."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-035",
    "topic": "Computer Networks - Network Security",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "Pretty Good Privacy (PGP) is used for:",
      "options": {
        "A": "Browser Security",
        "B": "Email Security",
        "C": "FTP Security",
        "D": "Wifi Security"
      },
      "explanation": "PGP is a standard for Email encryption and signing."
    },
    "answer": "B"
  },
    {
    "id": "Q-GEN-036",
    "topic": "Computer Networks - Transmission Delay",
    "type": "Numerical",
    "difficulty": "Easy",
    "content": {
      "question": "A link has a transmission speed of 10 Mbps. How long does it take to transmit a packet of length 10,000 bits?",
      "options": {},
      "explanation": "Transmission Delay = Length / Bandwidth = 10,000 bits / (10 * 10^6 bits/sec) = 10^4 / 10^7 = 10^-3 sec = 1 ms."
    },
    "answer": "1"
  },
  {
    "id": "Q-GEN-037",
    "topic": "Computer Networks - Stop and Wait",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "In Stop-and-Wait ARQ, if the probability of frame error is P, the average number of transmissions required to send a frame successfully is:",
      "options": {
        "A": "1 / (1-P)",
        "B": "1 / P",
        "C": "P / (1-P)",
        "D": "1 + P"
      },
      "explanation": "This follows a geometric distribution. The expected number of trials for the first success is 1/Prob(Success). Prob(Success) = 1 - P. Therefore, Mean = 1 / (1-P)."
    },
    "answer": "A"
  },
  {
    "id": "Q-GEN-038",
    "topic": "Computer Networks - Go-Back-N",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "Consider a Go-Back-N ARQ protocol with a sender window size of 10. If the 5th packet in a sequence of transmissions is lost, how many packets will be retransmitted?",
      "options": {},
      "explanation": "In Go-Back-N, if a packet is lost, the sender retransmits that packet and all subsequent packets in the window. If the window is full (10 packets) and the 5th one (relative to the window start) is lost, the sender will eventually timeout and resend the 5th plus the 5 packets sent after it (packets 6, 7, 8, 9, 10). However, usually, the answer depends on how many were actually sent. Assuming the window was full, 10 packets were outstanding. Packet 1-4 are ACKed. 5 is lost. 6-10 are discarded. Sender resends 5, 6, 7, 8, 9, 10. Total 6 packets? Actually, standard GBN retransmits the *entire* window from the lost point. If the question implies the window size is N, and a packet is lost, usually N packets are retransmitted in the worst case. But strictly: if packets 5,6,7,8,9... were sent. 5 is lost. Receiver discards 6,7,8... Sender times out on 5. Resends 5... and whatever follows. If the window was full, it resends the whole window."
    },
    "answer": "10"
  },
  {
    "id": "Q-GEN-039",
    "topic": "Computer Networks - IP Header",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following fields in the IPv4 header are related to fragmentation?",
      "options": {
        "A": "Identification",
        "B": "Fragment Offset",
        "C": "Type of Service",
        "D": "More Fragments (MF) flag"
      },
      "explanation": "Identification, Flags (MF, DF), and Fragment Offset are the three fields used to manage fragmentation and reassembly."
    },
    "answer": ["A", "B", "D"]
  },
  {
    "id": "Q-GEN-040",
    "topic": "Computer Networks - Routing",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "In a Link State routing algorithm, what technique is used to disseminate link state packets to all routers?",
      "options": {
        "A": "Random Walk",
        "B": "Controlled Flooding",
        "C": "Reverse Path Forwarding",
        "D": "Spanning Tree"
      },
      "explanation": "Link State protocols (like OSPF) use flooding (specifically reliable flooding) to send LSPs to every router."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-041",
    "topic": "Computer Networks - TCP",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "A TCP segment has a sequence number of 3000 and carries 500 bytes of data. What will be the sequence number of the next segment?",
      "options": {},
      "explanation": "Next Sequence Number = Current Sequence Number + Data Size = 3000 + 500 = 3500."
    },
    "answer": "3500"
  },
  {
    "id": "Q-GEN-042",
    "topic": "Computer Networks - Application Layer",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "Which DNS record type translates a domain name to an IPv4 address?",
      "options": {
        "A": "NS",
        "B": "CNAME",
        "C": "A",
        "D": "MX"
      },
      "explanation": "'A' record maps a hostname to an IPv4 address. 'AAAA' is for IPv6."
    },
    "answer": "C"
  },
  {
    "id": "Q-GEN-043",
    "topic": "Computer Networks - Cryptography",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following are Symmetric Key algorithms?",
      "options": {
        "A": "AES",
        "B": "RSA",
        "C": "DES",
        "D": "Diffie-Hellman"
      },
      "explanation": "AES and DES are symmetric. RSA and Diffie-Hellman are asymmetric (public key) algorithms."
    },
    "answer": ["A", "C"]
  },
  {
    "id": "Q-GEN-044",
    "topic": "Computer Networks - Subnetting",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "An organization has a Class C network 200.1.1.0. It wants to form subnets for 4 departments with hosts: A(72), B(35), C(20), D(18). If we use Variable Length Subnet Masking (VLSM), what is the size of the remaining free addresses?",
      "options": {},
      "explanation": "Class C total = 256. \nA needs 72 -> Block 128 (closest power of 2). Left: 128. \nB needs 35 -> Block 64. Left: 128-64=64. \nC needs 20 -> Block 32. Left: 64-32=32. \nD needs 18 -> Block 32. Left: 32-32=0. \nWait, D needs 18, so 16 is too small. Must take 32. \nTotal used = 128 + 64 + 32 + 32 = 256. \nFree addresses = 0."
    },
    "answer": "0"
  },
  {
    "id": "Q-GEN-045",
    "topic": "Computer Networks - Congestion Control",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which algorithm is used by TCP to avoid congestion collapse?",
      "options": {
        "A": "Leaky Bucket",
        "B": "Token Bucket",
        "C": "AIMD (Additive Increase Multiplicative Decrease)",
        "D": "Weighted Fair Queuing"
      },
      "explanation": "TCP uses AIMD for congestion avoidance. Leaky/Token buckets are traffic shaping algorithms used at the network boundary."
    },
    "answer": "C"
  },
  {
    "id": "Q-GEN-046",
    "topic": "Computer Networks - Firewalls",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "A packet-filtering firewall operates primarily at which layers of the OSI model?",
      "options": {
        "A": "Application and Presentation",
        "B": "Network and Transport",
        "C": "Data Link and Physical",
        "D": "Session and Transport"
      },
      "explanation": "Packet filters look at IP addresses (Network) and Port numbers (Transport)."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-047",
    "topic": "Computer Networks - Routing",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "In a RIP (Distance Vector) network, what is the value of 'Infinity' (unreachable)?",
      "options": {},
      "explanation": "RIP defines infinity as 16 hops."
    },
    "answer": "16"
  },
  {
    "id": "Q-GEN-048",
    "topic": "Computer Networks - Ethernet",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Gigabit Ethernet (1000 Mbps) supports which of the following?",
      "options": {
        "A": "Full Duplex Mode",
        "B": "Half Duplex Mode",
        "C": "CSMA/CD",
        "D": "Token Passing"
      },
      "explanation": "Gigabit Ethernet supports Full Duplex (most common) and Half Duplex (rarely used, but standard includes it with carrier extension). It uses CSMA/CD in half-duplex. It does not use Token Passing."
    },
    "answer": ["A", "B", "C"]
  },
  {
    "id": "Q-GEN-049",
    "topic": "Computer Networks - Protocol Headers",
    "type": "Numerical",
    "difficulty": "Easy",
    "content": {
      "question": "What is the minimum size of a UDP header in bytes?",
      "options": {},
      "explanation": "UDP header has 4 fields (Source Port, Dest Port, Length, Checksum) of 2 bytes each. Total = 8 bytes."
    },
    "answer": "8"
  },
  {
    "id": "Q-GEN-050",
    "topic": "Computer Networks - Application Layer",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which email protocol is used specifically for retrieving emails from a server to a client?",
      "options": {
        "A": "SMTP",
        "B": "POP3",
        "C": "MIME",
        "D": "SNMP"
      },
      "explanation": "SMTP is for sending/pushing. POP3 (and IMAP) are for retrieving/pulling."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-051",
    "topic": "Computer Networks - TCP",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The 'Three-Way Handshake' in TCP involves which sequence of flags?",
      "options": {
        "A": "SYN, SYN, ACK",
        "B": "SYN, SYN-ACK, ACK",
        "C": "SYN, ACK, SYN-ACK",
        "D": "FIN, FIN-ACK, ACK"
      },
      "explanation": "1. Client sends SYN. 2. Server sends SYN-ACK. 3. Client sends ACK."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-052",
    "topic": "Computer Networks - Network Layer",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "An IPv4 datagram has a total length of 4000 bytes. The header Length (HLEN) is 5. What is the length of the data payload?",
      "options": {},
      "explanation": "HLEN = 5 words = 5 * 4 = 20 bytes. Total Length = 4000. Data = 4000 - 20 = 3980 bytes."
    },
    "answer": "3980"
  },
  {
    "id": "Q-GEN-053",
    "topic": "Computer Networks - Digital Transmission",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "Manchester encoding is used in which standard?",
      "options": {
        "A": "Classic Ethernet (10BaseT)",
        "B": "Fast Ethernet",
        "C": "Gigabit Ethernet",
        "D": "Wi-Fi"
      },
      "explanation": "Standard 10 Mbps Ethernet uses Manchester encoding."
    },
    "answer": "A"
  },
  {
    "id": "Q-GEN-054",
    "topic": "Computer Networks - Error Control",
    "type": "Multiple Select",
    "difficulty": "Hard",
    "content": {
      "question": "Which of the following are valid Cyclic Redundancy Check (CRC) generator polynomials?",
      "options": {
        "A": "CRC-32",
        "B": "CRC-16",
        "C": "CRC-8",
        "D": "CRC-1"
      },
      "explanation": "CRC-32, CRC-16, and CRC-8 are standard polynomials. CRC-1 (parity) is theoretically possible but rarely referred to as a standard 'CRC polynomial' in the same context, though strictly valid mathematically."
    },
    "answer": ["A", "B", "C"]
  },
  {
    "id": "Q-GEN-055",
    "topic": "Computer Networks - Throughput",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "A channel has a bit rate of 4 kbps and a propagation delay of 20 ms. The packet size is 400 bits. The utilization of Stop-and-Wait ARQ is roughly:",
      "options": {},
      "explanation": "Transmission time Tt = 400 / 4000 = 0.1s. Tp = 0.02s. a = Tp/Tt = 0.02/0.1 = 0.2. Efficiency = 1 / (1 + 2a) = 1 / (1 + 0.4) = 1 / 1.4 = 0.714. Utilization is 71.4%."
    },
    "answer": "0.714"
  },
  {
    "id": "Q-GEN-056",
    "topic": "Computer Networks - Switches",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following creates a separate collision domain for each port but a single broadcast domain?",
      "options": {
        "A": "Hub",
        "B": "Switch",
        "C": "Router",
        "D": "Repeater"
      },
      "explanation": "A switch (Layer 2) breaks collision domains per port but maintains one broadcast domain (unless VLANs are used). Routers break broadcast domains. Hubs share collision domains."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-057",
    "topic": "Computer Networks - IPv6",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following features are present in IPv6 but NOT in IPv4?",
      "options": {
        "A": "Flow Label field",
        "B": "Header Checksum",
        "C": "128-bit addresses",
        "D": "Fragmentation by Routers"
      },
      "explanation": "Flow Label and 128-bit addresses are IPv6 specific. IPv6 removed the Header Checksum (relies on Link/Transport layer). IPv6 does NOT allow fragmentation by routers (only by source)."
    },
    "answer": ["A", "C"]
  },
  {
    "id": "Q-GEN-058",
    "topic": "Computer Networks - Sockets",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "The combination of an IP address and a port number is known as a:",
      "options": {
        "A": "Socket Endpoint",
        "B": "Service Access Point (SAP)",
        "C": "Protocol Data Unit",
        "D": "Interface"
      },
      "explanation": "It is referred to as a Socket Address or Endpoint."
    },
    "answer": "A"
  },
  {
    "id": "Q-GEN-059",
    "topic": "Computer Networks - Routing",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "In an Autonomous System using OSPF, there are 10 routers fully connected (mesh). How many links are there in the network?",
      "options": {},
      "explanation": "Full mesh links = n(n-1)/2. 10 * 9 / 2 = 45."
    },
    "answer": "45"
  },
  {
    "id": "Q-GEN-060",
    "topic": "Computer Networks - TCP Timers",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Karn's Algorithm is used in TCP to:",
      "options": {
        "A": "Calculate the Congestion Window",
        "B": "Update the RTT estimation",
        "C": "Determine the Sequence Number",
        "D": "Establish the connection"
      },
      "explanation": "Karn's Algorithm deals with the retransmission ambiguity problem when calculating RTT. It states: Do not update RTT samples for retransmitted segments."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-061",
    "topic": "Computer Networks - Framing",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Bit stuffing is used to:",
      "options": {
        "A": "Detect errors",
        "B": "Ensure the flag pattern does not appear in the payload",
        "C": "Pad the frame to minimum length",
        "D": "Synchronize the clock"
      },
      "explanation": "Bit stuffing inserts a 0 after five consecutive 1s to prevent the data from looking like the flag delimiter (01111110)."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-062",
    "topic": "Computer Networks - Network Security",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following are Denial of Service (DoS) attacks?",
      "options": {
        "A": "SYN Flooding",
        "B": "Smurf Attack",
        "C": "Man-in-the-middle",
        "D": "Ping of Death"
      },
      "explanation": "SYN Flooding, Smurf Attack, and Ping of Death are DoS attacks. Man-in-the-middle is an interception/eavesdropping attack."
    },
    "answer": ["A", "B", "D"]
  },
  {
    "id": "Q-GEN-063",
    "topic": "Computer Networks - Subnetting",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "If a subnet mask is 255.255.255.224, how many usable hosts are there per subnet?",
      "options": {},
      "explanation": ".224 is /27. 32 - 27 = 5 host bits. Usable hosts = 2^5 - 2 = 30."
    },
    "answer": "30"
  },
  {
    "id": "Q-GEN-064",
    "topic": "Computer Networks - HTTP",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which status code class in HTTP indicates a client error?",
      "options": {
        "A": "2xx",
        "B": "3xx",
        "C": "4xx",
        "D": "5xx"
      },
      "explanation": "4xx is Client Error (e.g., 404 Not Found). 2xx is Success. 3xx is Redirection. 5xx is Server Error."
    },
    "answer": "C"
  },
  {
    "id": "Q-GEN-065",
    "topic": "Computer Networks - Physical Layer",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "According to the Nyquist theorem, a noiseless channel with bandwidth 3000 Hz transmitting a signal with 2 signal levels can have a maximum data rate of:",
      "options": {},
      "explanation": "Max Data Rate = 2 * Bandwidth * log2(L). 2 * 3000 * log2(2) = 6000 bps."
    },
    "answer": "6000"
  },
  {
    "id": "Q-GEN-066",
    "topic": "Computer Networks - Bluetooth",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "Bluetooth network configuration is often referred to as a:",
      "options": {
        "A": "Piconet",
        "B": "Micronet",
        "C": "Extranet",
        "D": "Intranet"
      },
      "explanation": "Bluetooth devices form a Piconet (one master, up to seven slaves)."
    },
    "answer": "A"
  },
  {
    "id": "Q-GEN-067",
    "topic": "Computer Networks - Network Devices",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "A proxy server is typically used for:",
      "options": {
        "A": "Refreshing the MAC table",
        "B": "Content caching and filtering",
        "C": "Assigning IP addresses",
        "D": "Routing OSPF packets"
      },
      "explanation": "Proxy servers act as intermediaries for requests, often caching content for performance or filtering requests for security."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-068",
    "topic": "Computer Networks - TCP Congestion",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "Assume TCP Reno. SSThresh is 16 MSS. The current Window size is 20 MSS. A timeout occurs. What is the new Congestion Window size (in MSS)?",
      "options": {},
      "explanation": "On Timeout: SSThresh becomes Window/2 = 10. Congestion Window is reset to 1 MSS (Slow Start)."
    },
    "answer": "1"
  },
  {
    "id": "Q-GEN-069",
    "topic": "Computer Networks - Hamming Code",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "To detect d bits of errors, the Hamming distance must be at least:",
      "options": {},
      "explanation": "Distance >= d + 1."
    },
    "answer": "d+1"
  },
  {
    "id": "Q-GEN-070",
    "topic": "Computer Networks - Wireless",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The 'Hidden Node Problem' in wireless networks is solved using:",
      "options": {
        "A": "Frequency Hopping",
        "B": "RTS/CTS mechanism",
        "C": "Increasing Power",
        "D": "Reducing Cell Size"
      },
      "explanation": "Request to Send / Clear to Send (RTS/CTS) handshake reserves the medium, preventing hidden nodes from transmitting."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-071",
    "topic": "Computer Networks - Routing",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following is true about Autonomous Systems (AS)?",
      "options": {
        "A": "Interior Gateway Protocols run between ASs.",
        "B": "Exterior Gateway Protocols run within an AS.",
        "C": "BGP is used to route between ASs.",
        "D": "RIP is an Exterior Gateway Protocol."
      },
      "explanation": "IGPs (RIP, OSPF) run within an AS. EGPs (BGP) run between ASs."
    },
    "answer": "C"
  },
  {
    "id": "Q-GEN-072",
    "topic": "Computer Networks - IP Addressing",
    "type": "Numerical",
    "difficulty": "Easy",
    "content": {
      "question": "Convert the IP address 192.168.1.1 to binary. What is the value of the first octet?",
      "options": {},
      "explanation": "192 = 128 + 64 = 11000000."
    },
    "answer": "11000000"
  },
  {
    "id": "Q-GEN-073",
    "topic": "Computer Networks - Transport Layer",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which services are provided by TCP but NOT UDP?",
      "options": {
        "A": "Flow Control",
        "B": "Congestion Control",
        "C": "Process-to-Process delivery",
        "D": "Connection-oriented service"
      },
      "explanation": "Both provide Process-to-process (via ports). TCP adds Flow Control, Congestion Control, and Reliability (Connection-oriented)."
    },
    "answer": ["A", "B", "D"]
  },
  {
    "id": "Q-GEN-074",
    "topic": "Computer Networks - Delay",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "If the queuing delay is 10 ms, transmission delay is 5 ms, propagation delay is 20 ms, and processing delay is 2 ms, what is the total end-to-end delay?",
      "options": {},
      "explanation": "Total = Queue + Trans + Prop + Proc = 10 + 5 + 20 + 2 = 37 ms."
    },
    "answer": "37"
  },
  {
    "id": "Q-GEN-075",
    "topic": "Computer Networks - ARP",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "An ARP Request is ________, and an ARP Reply is ________.",
      "options": {
        "A": "Unicast, Broadcast",
        "B": "Broadcast, Unicast",
        "C": "Broadcast, Broadcast",
        "D": "Unicast, Unicast"
      },
      "explanation": "Request is broadcast (Who has IP X?). Reply is unicast (I have IP X, here is my MAC)."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-076",
    "topic": "Computer Networks - MIME",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "MIME allows SMTP to transmit:",
      "options": {
        "A": "Only ASCII text",
        "B": "Non-ASCII data (Video, Audio, Images)",
        "C": "Only small text files",
        "D": "Only English characters"
      },
      "explanation": "Multipurpose Internet Mail Extensions (MIME) extends email to support non-ASCII text, attachments, etc."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-077",
    "topic": "Computer Networks - VLAN",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "IEEE 802.1Q is the standard for:",
      "options": {
        "A": "Wi-Fi",
        "B": "VLAN Tagging",
        "C": "Spanning Tree",
        "D": "Token Ring"
      },
      "explanation": "802.1Q defines VLAN tagging on Ethernet frames."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-078",
    "topic": "Computer Networks - Subnetting",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "How many bits are used for the Network ID in a Class B address?",
      "options": {},
      "explanation": "Class B format is Net.Net.Host.Host. 16 bits for Network ID (14 actual bits plus 2 leading '10' bits)."
    },
    "answer": "16"
  },
  {
    "id": "Q-GEN-079",
    "topic": "Computer Networks - Sliding Window",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "In a sliding window protocol, if the window size is 4, what is the maximum number of frames that can be sent without acknowledgment?",
      "options": {},
      "explanation": "The sender can send up to 'Window Size' frames before stopping to wait for an ACK."
    },
    "answer": "4"
  },
  {
    "id": "Q-GEN-080",
    "topic": "Computer Networks - Security",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following provides confidentiality, integrity, and authentication for IP packets?",
      "options": {
        "A": "SSL/TLS",
        "B": "IPSec",
        "C": "PGP",
        "D": "SSH"
      },
      "explanation": "IPSec (Internet Protocol Security) works at the Network layer to secure IP packets."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-081",
    "topic": "Computer Networks - Ports",
    "type": "Numerical",
    "difficulty": "Easy",
    "content": {
      "question": "What is the standard port number for HTTPS?",
      "options": {},
      "explanation": "HTTPS uses port 443."
    },
    "answer": "443"
  },
  {
    "id": "Q-GEN-082",
    "topic": "Computer Networks - Leaky Bucket",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The Leaky Bucket algorithm enforces a:",
      "options": {
        "A": "Constant Output Rate",
        "B": "Variable Output Rate",
        "C": "Constant Input Rate",
        "D": "Burst Output Rate"
      },
      "explanation": "Leaky Bucket smooths bursty traffic into a constant output rate."
    },
    "answer": "A"
  },
  {
    "id": "Q-GEN-083",
    "topic": "Computer Networks - Distance Vector",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Split Horizon is a technique used to:",
      "options": {
        "A": "Increase bandwidth",
        "B": "Prevent routing loops in Distance Vector routing",
        "C": "Fragment packets",
        "D": "Encrypt data"
      },
      "explanation": "Split Horizon prevents a router from advertising a route back onto the interface from which it learned it, reducing loops."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-084",
    "topic": "Computer Networks - Error Detection",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "A simple parity check can detect:",
      "options": {
        "A": "Two errors",
        "B": "Single-bit errors",
        "C": "Burst errors",
        "D": "Four errors"
      },
      "explanation": "Simple parity (even/odd) detects an odd number of errors, reliably detecting single-bit errors. It cannot detect 2 errors (parity remains same)."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-085",
    "topic": "Computer Networks - Physical Layer",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "A signal has a Signal-to-Noise Ratio (SNR) of 1000. What is the SNR in decibels (dB)?",
      "options": {},
      "explanation": "SNR(dB) = 10 * log10(SNR) = 10 * log10(1000) = 10 * 3 = 30 dB."
    },
    "answer": "30"
  },
    {
    "id": "Q-GEN-086",
    "topic": "Computer Networks - Routing",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "In OSPF, which LSA type is generated by the ASBR (Autonomous System Boundary Router) to advertise external routes?",
      "options": {
        "A": "Type 1 (Router LSA)",
        "B": "Type 3 (Summary LSA)",
        "C": "Type 5 (AS External LSA)",
        "D": "Type 2 (Network LSA)"
      },
      "explanation": "Type 1 is Router LSA (intra-area). Type 2 is Network LSA (DR). Type 3 is Summary (Inter-area). Type 5 is AS External LSA generated by ASBR."
    },
    "answer": "C"
  },
  {
    "id": "Q-GEN-087",
    "topic": "Computer Networks - Congestion Control",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following AQM (Active Queue Management) mechanisms drops packets before the queue is full to signal congestion?",
      "options": {
        "A": "Tail Drop",
        "B": "RED (Random Early Detection)",
        "C": "FIFO",
        "D": "Priority Queuing"
      },
      "explanation": "RED monitors the average queue size and drops packets probabilistically before the buffer overflows to prevent global synchronization."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-088",
    "topic": "Computer Networks - Subnetting",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "A network has the subnet mask 255.255.255.248. How many usable host IP addresses are available in this subnet?",
      "options": {},
      "explanation": "Mask .248 is /29. Host bits = 32 - 29 = 3. Total combos = 2^3 = 8. Usable hosts = 8 - 2 (Network & Broadcast) = 6."
    },
    "answer": "6"
  },
  {
    "id": "Q-GEN-089",
    "topic": "Computer Networks - HTTP",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which header field in HTTP is used for conditional GET requests (caching)?",
      "options": {
        "A": "If-Modified-Since",
        "B": "User-Agent",
        "C": "Accept-Language",
        "D": "Connection"
      },
      "explanation": "If-Modified-Since allows the server to send 304 Not Modified if the resource hasn't changed, saving bandwidth."
    },
    "answer": "A"
  },
  {
    "id": "Q-GEN-090",
    "topic": "Computer Networks - Framing",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "If a bit-stuffing protocol inserts a 0 after five consecutive 1s, what is the stuffed bit stream for the data '01111110'?",
      "options": {},
      "explanation": "Original: 01111110. After five 1s, insert 0. Result: 011111010. (Note: The original data had six 1s. After the 5th, a 0 is inserted. Then the 6th '1' follows, then '0'.)"
    },
    "answer": "011111010"
  },
  {
    "id": "Q-GEN-091",
    "topic": "Computer Networks - Wireless",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "The 802.11i standard is typically known as:",
      "options": {
        "A": "WEP",
        "B": "WPA2",
        "C": "WPS",
        "D": "Bluetooth"
      },
      "explanation": "802.11i implemented WPA2 (Wi-Fi Protected Access 2) using AES encryption."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-092",
    "topic": "Computer Networks - Routing",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Which BGP attribute is used to prevent routing loops within an Autonomous System?",
      "options": {
        "A": "AS_PATH",
        "B": "NEXT_HOP",
        "C": "MED",
        "D": "ORIGIN"
      },
      "explanation": "When a router sees its own AS number in the AS_PATH attribute of a route, it rejects the route, preventing loops."
    },
    "answer": "A"
  },
  {
    "id": "Q-GEN-093",
    "topic": "Computer Networks - Multicast",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which protocol is used by routers to manage multicast group membership on a local network segment?",
      "options": {
        "A": "ICMP",
        "B": "IGMP",
        "C": "OSPF",
        "D": "PIM"
      },
      "explanation": "IGMP (Internet Group Management Protocol) manages host membership in multicast groups."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-094",
    "topic": "Computer Networks - TCP Flow Control",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "Host A sends data to Host B. B's window size is 5000 bytes. A sends a segment with 2000 bytes. B receives it and buffers 1000 bytes (application reads 1000 bytes). What is the new advertised window size?",
      "options": {},
      "explanation": "Buffer capacity = 5000. Data currently in buffer = 2000 (received) - 1000 (read) = 1000. Available window = 5000 - 1000 = 4000 bytes."
    },
    "answer": "4000"
  },
  {
    "id": "Q-GEN-095",
    "topic": "Computer Networks - IP Header",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "The 'Time to Live' (TTL) field in an IPv4 packet is decremented by:",
      "options": {
        "A": "Every switch",
        "B": "Every router",
        "C": "Every 1 second",
        "D": "Every 10 milliseconds"
      },
      "explanation": "TTL is decremented by 1 at each router (hop)."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-096",
    "topic": "Computer Networks - Security",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following is considered a 'stateless' firewall?",
      "options": {
        "A": "Packet Filter",
        "B": "Application Gateway",
        "C": "Circuit-level Gateway",
        "D": "Stateful Inspection Firewall"
      },
      "explanation": "Standard Packet Filters inspect packets in isolation (headers only) without tracking the state of the connection."
    },
    "answer": "A"
  },
  {
    "id": "Q-GEN-097",
    "topic": "Computer Networks - Physical Layer",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "What is the baud rate of a signal that carries 3 bits per signal element and has a bit rate of 6000 bps?",
      "options": {},
      "explanation": "Bit Rate = Baud Rate * bits_per_element. 6000 = Baud * 3. Baud Rate = 2000."
    },
    "answer": "2000"
  },
  {
    "id": "Q-GEN-098",
    "topic": "Computer Networks - Application Layer",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "In the Email system, the User Agent (UA) is:",
      "options": {
        "A": "The mail server",
        "B": "The program used to send and read mail (e.g., Outlook)",
        "C": "The protocol used to transfer mail",
        "D": "The DNS server for MX records"
      },
      "explanation": "The User Agent is the client-side software."
    },
    "answer": "B"
  },
  {
    "id": "Q-GEN-099",
    "topic": "Computer Networks - TCP/UDP",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following applications typically prefer UDP over TCP?",
      "options": {
        "A": "Real-time Voice (VoIP)",
        "B": "File Transfer (FTP)",
        "C": "Online Gaming",
        "D": "Web Browsing (HTTP/1.1)"
      },
      "explanation": "Real-time apps (Voice, Gaming) prefer speed and can tolerate some loss, so they use UDP. FTP and HTTP require reliability, so they use TCP."
    },
    "answer": ["A", "C"]
  },
  {
    "id": "Q-GEN-100",
    "topic": "Computer Networks - Switching",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "In a Virtual Circuit network, the VCI (Virtual Circuit Identifier) is:",
      "options": {
        "A": "Global and unique for the whole network",
        "B": "Local and unique only to the link",
        "C": "Same as the IP address",
        "D": "Determined by the MAC address"
      },
      "explanation": "VCIs are link-local. They change at every switch (router) hop, using a translation table."
    },
    "answer": "B"
  }
];
