const allQuestions = [
  {
    "id": "Q-001",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "Which of the following regular expressions denotes the language comprising all strings over {0, 1} having at least two 0s?",
      "options": {
        "A": "(0+1)*00(0+1)*",
        "B": "(0+1)*0(0+1)*0(0+1)*",
        "C": "(0+1)*0(0+1)*",
        "D": "00(0+1)*"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-002",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "The regular expression 0*(10*)* denotes the same set as:",
      "options": {
        "A": "(0*1)*0*",
        "B": "(0+1)*",
        "C": "0(0+1)*",
        "D": "None of these"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-003",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following regular expressions represents the set of all strings over {a, b} starting with 'a' and ending with 'b'?",
      "options": {
        "A": "a(a+b)*b",
        "B": "a(a+b)b",
        "C": "a*(a+b)*b*",
        "D": "ab(a+b)*"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-004",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The regular expression (a + b)* denotes:",
      "options": {
        "A": "Set of all strings containing at least one 'a'",
        "B": "Set of all strings containing at least one 'b'",
        "C": "Set of all strings over {a, b} including epsilon",
        "D": "Set of all strings over {a, b} excluding epsilon"
      },
      "explanation": ""
    },
    "answer": "C"
  },
  {
    "id": "Q-005",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "Consider the regular expression R = (10 + 1)*. How many strings of length 4 are in L(R)?",
      "options": {},
      "explanation": ""
    },
    "answer": "3"
  },
  {
    "id": "Q-006",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following is equivalent to the regular expression (00 + 11)*?",
      "options": {
        "A": "00(00)* + 11(11)*",
        "B": "(00)*(11)*",
        "C": "((00)*(11)*)*",
        "D": "(00)* + (11)*"
      },
      "explanation": ""
    },
    "answer": "C"
  },
  {
    "id": "Q-007",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Let R1 = a*b* and R2 = (a+b)*. Which of the following is true?",
      "options": {
        "A": "L(R1) = L(R2)",
        "B": "L(R1) is a subset of L(R2)",
        "C": "L(R2) is a subset of L(R1)",
        "D": "L(R1) intersection L(R2) is empty"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-008",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following strings are NOT accepted by the regular expression 0*10*10*?",
      "options": {
        "A": "11",
        "B": "01010",
        "C": "0011",
        "D": "100"
      },
      "explanation": ""
    },
    "answer": ["D"]
  },
  {
    "id": "Q-009",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "The regular expression for the language of all strings over {0, 1} that do not contain the substring '11' is:",
      "options": {
        "A": "(0+10)*",
        "B": "(0+10)*(1+epsilon)",
        "C": "(0+1)*",
        "D": "0*10*"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-010",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "What is the length of the shortest string NOT accepted by the regular expression (0+1)*0(0+1)*0(0+1)*?",
      "options": {},
      "explanation": ""
    },
    "answer": "0"
  },
  {
    "id": "Q-011",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which regular expression represents strings of even length over {a,b}?",
      "options": {
        "A": "(aa+bb)*",
        "B": "((a+b)(a+b))*",
        "C": "(a+b)(a+b)*",
        "D": "(aa+ab+ba+bb)*"
      },
      "explanation": ""
    },
    "answer": "D"
  },
  {
    "id": "Q-012",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Hard",
    "content": {
      "question": "Which of the following identities are true for regular expressions r and s?",
      "options": {
        "A": "(r*)* = r*",
        "B": "(rs)*r = r(sr)*",
        "C": "(r+s)* = (r*s*)*",
        "D": "r* + s* = (r+s)*"
      },
      "explanation": ""
    },
    "answer": ["A", "B", "C"]
  },
  {
    "id": "Q-013",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The regular expression a(a+b)*b + b(a+b)*a represents:",
      "options": {
        "A": "Strings starting and ending with different symbols",
        "B": "Strings starting and ending with the same symbol",
        "C": "Strings of odd length",
        "D": "Strings containing at least one 'a' and one 'b'"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-014",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "Find the number of strings of length 3 in the language defined by R = (a+b+c)*a(a+b)*.",
      "options": {},
      "explanation": ""
    },
    "answer": "19"
  },
  {
    "id": "Q-015",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which regex denotes the set of strings over {0,1} where every 0 is immediately followed by a 1?",
      "options": {
        "A": "(01+1)*",
        "B": "(01)*1*",
        "C": "01(01+1)*",
        "D": "(0+1)*01"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-016",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "The regular expression for strings over {a, b} containing exactly two b's is:",
      "options": {
        "A": "a*ba*ba*",
        "B": "(a+b)*bb(a+b)*",
        "C": "a*b*b*a*",
        "D": "ab*a*b"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-017",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "Which of the following is an empty language?",
      "options": {
        "A": "0*",
        "B": "phi",
        "C": "epsilon",
        "D": "0+phi"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-018",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "Consider R = (11+111)*. How many strings of length 5 are in L(R)?",
      "options": {},
      "explanation": ""
    },
    "answer": "0"
  },
  {
    "id": "Q-019",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Hard",
    "content": {
      "question": "The regular expression (0+1)*01(0+1)* represents strings that:",
      "options": {
        "A": "Contain '01' as a substring",
        "B": "End with '01'",
        "C": "Start with '01'",
        "D": "Have at least one occurrence of '01'"
      },
      "explanation": ""
    },
    "answer": ["A", "D"]
  },
  {
    "id": "Q-020",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which regex accepts strings where the number of a's is even?",
      "options": {
        "A": "(b*ab*ab*)*",
        "B": "(b*ab*a)*b*",
        "C": "b*(ab*a)*b*",
        "D": "All of the above"
      },
      "explanation": ""
    },
    "answer": "D"
  },
  {
    "id": "Q-021",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "If R = a + b, then R* is equivalent to:",
      "options": {
        "A": "a* + b*",
        "B": "(a*b*)*",
        "C": "a*b*",
        "D": "a+b"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-022",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "How many states are in the minimal DFA for the regular expression (0+1)*?",
      "options": {},
      "explanation": ""
    },
    "answer": "1"
  },
  {
    "id": "Q-023",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The regular expression epsilon + 0(0+1)* + 1(1+0)* represents:",
      "options": {
        "A": "Strings of length at least 1",
        "B": "Strings of length 0",
        "C": "All strings over {0,1}",
        "D": "Strings starting with 0 or 1"
      },
      "explanation": ""
    },
    "answer": "C"
  },
  {
    "id": "Q-024",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Which of the following is NOT equivalent to (a+b)*?",
      "options": {
        "A": "(a*b*)*",
        "B": "(a*+b*)*",
        "C": "a* (ba*)*",
        "D": "a*b*"
      },
      "explanation": ""
    },
    "answer": "D"
  },
  {
    "id": "Q-025",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "Let R = 0*1. What is the maximum number of 1s in any string of L(R)?",
      "options": {},
      "explanation": ""
    },
    "answer": "1"
  },
  {
    "id": "Q-026",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The regular expression for strings over {0,1} that end in '00' is:",
      "options": {
        "A": "(0+1)*00",
        "B": "00(0+1)*",
        "C": "(0+1)*00(0+1)*",
        "D": "0*1*00"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-027",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Which regex denotes the language of strings where every run of 'a's has length at least 2?",
      "options": {
        "A": "(aa+b)*",
        "B": "(aaa*+b)*",
        "C": "(aa(a)*+b)*",
        "D": "((aa)+b)*"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-028",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following are regular languages?",
      "options": {
        "A": "L = {a^n | n >= 0}",
        "B": "L = {a^n b^n | n >= 0}",
        "C": "L = {w | w has equal number of 0s and 1s}",
        "D": "L = {w | w does not contain substring '00'}"
      },
      "explanation": ""
    },
    "answer": ["A", "D"]
  },
  {
    "id": "Q-029",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The language defined by R = (a+b)*aa(a+b)* is:",
      "options": {
        "A": "Strings containing exactly two a's",
        "B": "Strings starting with aa",
        "C": "Strings ending with aa",
        "D": "Strings containing substring aa"
      },
      "explanation": ""
    },
    "answer": "D"
  },
  {
    "id": "Q-030",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "How many strings of length <= 3 are in the language of R = 0(1+0)*?",
      "options": {},
      "explanation": ""
    },
    "answer": "7"
  },
  {
    "id": "Q-031",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "If L1 represented by R1 is finite, and L2 represented by R2 is infinite, then L(R1+R2) is:",
      "options": {
        "A": "Finite",
        "B": "Infinite",
        "C": "Empty",
        "D": "Cannot be determined"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-032",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The regular expression for the set of all strings over {a, b} with at most one 'a' is:",
      "options": {
        "A": "b*ab*",
        "B": "b* + b*ab*",
        "C": "b*a*b*",
        "D": "(b*a)*b*"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-033",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Hard",
    "content": {
      "question": "Which of the following are identities?",
      "options": {
        "A": "R + R = R",
        "B": "(R*)* = R*",
        "C": "R*R* = R*",
        "D": "(R+S)* = R* + S*"
      },
      "explanation": ""
    },
    "answer": ["A", "B", "C"]
  },
  {
    "id": "Q-034",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "What does the regular expression (0*1*)* denote?",
      "options": {
        "A": "{0, 1}*",
        "B": "0* + 1*",
        "C": "0*1*",
        "D": "Strings with equal 0s and 1s"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-035",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Easy",
    "content": {
      "question": "The length of the shortest string in the language represented by 0*110* is:",
      "options": {},
      "explanation": ""
    },
    "answer": "2"
  },
  {
    "id": "Q-036",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Which regular expression corresponds to strings over {0,1} having no two consecutive 0s?",
      "options": {
        "A": "(1 + 01)*",
        "B": "(1 + 01)*(0 + epsilon)",
        "C": "(1 + 10)*",
        "D": "(0 + 10)*"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-037",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The regular expression (a+b)a*b* denotes:",
      "options": {
        "A": "Strings starting with a or b followed by any number of a's and b's",
        "B": "Strings of length at least 1",
        "C": "Strings starting with a or b, then a's, then b's",
        "D": "Any string over {a,b}"
      },
      "explanation": ""
    },
    "answer": "C"
  },
  {
    "id": "Q-038",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Which of the following is equivalent to (0+1)*001(0+1)*?",
      "options": {
        "A": "(1+0)*001(1+0)*",
        "B": "(0+1)*100(0+1)*",
        "C": "(01+10)*",
        "D": "(0+1)*010(0+1)*"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-039",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "If L = {epsilon, 0, 00, 000, ...}, the regular expression is:",
      "options": {
        "A": "0*",
        "B": "0+",
        "C": "00*",
        "D": "0*0"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-040",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "Number of strings of length exactly 2 accepted by (0+1)(0+1) is:",
      "options": {},
      "explanation": ""
    },
    "answer": "4"
  },
  {
    "id": "Q-041",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The regular expression a*b*c* denotes:",
      "options": {
        "A": "Strings with a's then b's then c's",
        "B": "Strings with any mix of a, b, c",
        "C": "Strings of length 3",
        "D": "Strings with equal number of a, b, c"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-042",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Hard",
    "content": {
      "question": "Which of the following regular expressions denote a language containing the empty string?",
      "options": {
        "A": "a*b",
        "B": "a* + b",
        "C": "(a+b)*",
        "D": "a?b?"
      },
      "explanation": ""
    },
    "answer": ["B", "C", "D"]
  },
  {
    "id": "Q-043",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "The set of all strings over {0,1} beginning with 0 and ending with 1 is given by:",
      "options": {
        "A": "0(0+1)*1",
        "B": "0*(0+1)*1",
        "C": "0(0+1)*1*",
        "D": "0*1*"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-044",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "Minimum number of states in DFA for R = (0+1)*00?",
      "options": {},
      "explanation": ""
    },
    "answer": "3"
  },
  {
    "id": "Q-045",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which regex is equivalent to (a+b)*?",
      "options": {
        "A": "a* + b*",
        "B": "(a*b)*",
        "C": "(a*b*)*",
        "D": "a*b*a*"
      },
      "explanation": ""
    },
    "answer": "C"
  },
  {
    "id": "Q-046",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Consider R = (10)*. Which string is NOT in L(R)?",
      "options": {
        "A": "epsilon",
        "B": "1010",
        "C": "101",
        "D": "10"
      },
      "explanation": ""
    },
    "answer": "C"
  },
  {
    "id": "Q-047",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Regular expression for 'at least one 0 and at least one 1'?",
      "options": {
        "A": "(0+1)*0(0+1)*1(0+1)* + (0+1)*1(0+1)*0(0+1)*",
        "B": "(0+1)*01(0+1)*",
        "C": "0*1* + 1*0*",
        "D": "0(0+1)*1"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-048",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "How many strings of length 3 are in the language L = a(a+b)*b?",
      "options": {},
      "explanation": ""
    },
    "answer": "2"
  },
  {
    "id": "Q-049",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "The regular expression (0+1)(0+1)...(0+1) (n times) represents:",
      "options": {
        "A": "Strings of length n",
        "B": "Strings of length at least n",
        "C": "Strings of length at most n",
        "D": "Strings with n 0s"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-050",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Hard",
    "content": {
      "question": "Which of the following regex pairs are equivalent?",
      "options": {
        "A": "1(01)* and (10)*1",
        "B": "(0+1)* and (0*1*)*",
        "C": "(a+b)* and a* + b*",
        "D": "0*10* and 0*1"
      },
      "explanation": ""
    },
    "answer": ["A", "B"]
  },
  {
    "id": "Q-051",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which regular expression represents strings that do NOT end with 01?",
      "options": {
        "A": "(0+1)*(00+10+11)",
        "B": "(0+1)*(00+10+11) + epsilon + 0 + 1",
        "C": "(0+1)*00",
        "D": "epsilon + 0 + 1"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-052",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "Consider R = 1(0+1)*1. The number of strings of length 4 in L(R) is:",
      "options": {},
      "explanation": ""
    },
    "answer": "4"
  },
  {
    "id": "Q-053",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The expression (a*b*)* is equivalent to:",
      "options": {
        "A": "a* + b*",
        "B": "(a+b)*",
        "C": "a*b*",
        "D": "a*b"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-054",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "L = {w | w starts with 0}. The Regex is:",
      "options": {
        "A": "0(0+1)*",
        "B": "(0+1)*0",
        "C": "0*",
        "D": "0*1*"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-055",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which regex denotes strings containing an odd number of 1s?",
      "options": {
        "A": "0*10*",
        "B": "0*1(0*10*1)*0*",
        "C": "0*(10*10*)*10*",
        "D": "(0*10*1)*"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-056",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Hard",
    "content": {
      "question": "Which of these languages are Regular?",
      "options": {
        "A": "{a^n | n is prime}",
        "B": "{a^n | n is even}",
        "C": "{w | w is a palindrome}",
        "D": "{a^n b^m | n, m >= 0}"
      },
      "explanation": ""
    },
    "answer": ["B", "D"]
  },
  {
    "id": "Q-057",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "The length of the longest string in L(0+1) is:",
      "options": {},
      "explanation": ""
    },
    "answer": "1"
  },
  {
    "id": "Q-058",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which regular expression covers all binary strings except the empty string?",
      "options": {
        "A": "(0+1)*",
        "B": "(0+1)+",
        "C": "0(0+1)*",
        "D": "(0+1)*1"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-059",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Simplify: epsilon + 1*(01*)*",
      "options": {
        "A": "(1+0)*",
        "B": "1*0*",
        "C": "(1+01)*",
        "D": "epsilon"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-060",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "Number of states in minimal DFA for R = a*b?",
      "options": {},
      "explanation": ""
    },
    "answer": "3"
  },
  {
    "id": "Q-061",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which regex generates the language L = {a, b, ab, ba}?",
      "options": {
        "A": "a+b+ab+ba",
        "B": "(a+b)(a+b)",
        "C": "(a+b)*",
        "D": "a*b*"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-062",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "The complement of the language denoted by (0+1)*0 is:",
      "options": {
        "A": "(0+1)*1",
        "B": "(0+1)*1 + epsilon",
        "C": "0*",
        "D": "1*"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-063",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following strings are accepted by a*b+c?",
      "options": {
        "A": "b",
        "B": "ab",
        "C": "c",
        "D": "abc"
      },
      "explanation": ""
    },
    "answer": ["A", "B", "C"]
  },
  {
    "id": "Q-064",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "How many strings of length 4 are generated by 00(0+1)*?",
      "options": {},
      "explanation": ""
    },
    "answer": "4"
  },
  {
    "id": "Q-065",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The regular expression 0*10*10* denotes strings with:",
      "options": {
        "A": "Exactly two 1s",
        "B": "At least two 1s",
        "C": "No 1s",
        "D": "Any number of 1s"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-066",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Which regex denotes the language {w | |w| mod 3 = 0}?",
      "options": {
        "A": "((0+1)(0+1)(0+1))*",
        "B": "(0+1)(0+1)(0+1)*",
        "C": "(000+111)*",
        "D": "((0+1)*)*"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-067",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The expression (a+b)*ab denotes:",
      "options": {
        "A": "Strings ending in ab",
        "B": "Strings starting with ab",
        "C": "Strings containing ab",
        "D": "Strings with only one ab"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-068",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "Minimal states in DFA for R = 0*?",
      "options": {},
      "explanation": ""
    },
    "answer": "2"
  },
  {
    "id": "Q-069",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "Which of the following accepts epsilon?",
      "options": {
        "A": "0+",
        "B": "0*",
        "C": "0",
        "D": "phi"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-070",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Hard",
    "content": {
      "question": "Which are true regarding regular expressions R, S, T?",
      "options": {
        "A": "R(S+T) = RS + RT",
        "B": "(RS)* = R*S*",
        "C": "(R*)* = R*",
        "D": "R+S = S+R"
      },
      "explanation": ""
    },
    "answer": ["A", "C", "D"]
  },
  {
    "id": "Q-071",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Regex for strings not containing '00' over {0,1}:",
      "options": {
        "A": "(1+01)*",
        "B": "(1+01)*(0+epsilon)",
        "C": "(1+10)*",
        "D": "(0+1)*"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-072",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "If L1 = {0} and L2 = {1}, what is the number of strings of length 2 in L1*L2*?",
      "options": {},
      "explanation": ""
    },
    "answer": "3"
  },
  {
    "id": "Q-073",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Which regex denotes strings where the 10th symbol from the right is a 1?",
      "options": {
        "A": "(0+1)*1(0+1)^9",
        "B": "(0+1)*1(0+1)^10",
        "C": "(0+1)^9 1 (0+1)*",
        "D": "1(0+1)^9"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-074",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The language of R = 1(01+10)*1 is:",
      "options": {
        "A": "Palindromes",
        "B": "Strings starting and ending with 1",
        "C": "Even length strings",
        "D": "Strings with odd length"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-075",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Easy",
    "content": {
      "question": "How many strings of length < 2 are in L(0*)?",
      "options": {},
      "explanation": ""
    },
    "answer": "2"
  },
  {
    "id": "Q-076",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which of the following is true for R = (0+1)*?",
      "options": {
        "A": "It is finite",
        "B": "It is regular",
        "C": "It is context-free but not regular",
        "D": "It is not context-free"
      },
      "explanation": ""
    },
    "answer": "B"
  },
  {
    "id": "Q-077",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Identify the regex for 'Strings with even number of 0s'.",
      "options": {
        "A": "(1*01*01*)*",
        "B": "(1*01*0)*1*",
        "C": "1*(01*01*)*",
        "D": "1*(01*0)*1*"
      },
      "explanation": ""
    },
    "answer": "C"
  },
  {
    "id": "Q-078",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Medium",
    "content": {
      "question": "Which strings are accepted by a*b+c?",
      "options": {
        "A": "b",
        "B": "ab",
        "C": "c",
        "D": "abc"
      },
      "explanation": ""
    },
    "answer": ["A", "B", "C"]
  },
  {
    "id": "Q-079",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "Total number of strings of length 3 accepted by (0+1)*(00+11)?",
      "options": {},
      "explanation": ""
    },
    "answer": "4"
  },
  {
    "id": "Q-080",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The regular expression for strings containing 'bbb' as a substring:",
      "options": {
        "A": "(a+b)*bbb(a+b)*",
        "B": "bbb(a+b)*",
        "C": "(a+b)*bbb",
        "D": "b*bbb b*"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-081",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Easy",
    "content": {
      "question": "Which of the following implies L(R) = {epsilon}?",
      "options": {
        "A": "R = epsilon",
        "B": "R = phi*",
        "C": "Both A and B",
        "D": "None"
      },
      "explanation": ""
    },
    "answer": "C"
  },
  {
    "id": "Q-082",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "Length of the shortest string in L((00+111)*)?",
      "options": {},
      "explanation": ""
    },
    "answer": "0"
  },
  {
    "id": "Q-083",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Regex for strings with odd number of a's and even number of b's?",
      "options": {
        "A": "(aa+bb)*((ab+ba)(aa+bb)*(ab+ba)(aa+bb)*)*",
        "B": "complex_construction",
        "C": "Cannot be represented by Regex",
        "D": "None of the above"
      },
      "explanation": ""
    },
    "answer": "D"
  },
  {
    "id": "Q-084",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The derivative of a regular expression is related to:",
      "options": {
        "A": "Brzozowski derivative",
        "B": "Calculus",
        "C": "Pumping Lemma",
        "D": "None"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-085",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "Number of states in minimal DFA for R = (0+1)*101?",
      "options": {},
      "explanation": ""
    },
    "answer": "4"
  },
  {
    "id": "Q-086",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "R = (a+b)*a. L(R) is:",
      "options": {
        "A": "All strings ending in a",
        "B": "All strings starting with a",
        "C": "All strings containing a",
        "D": "All strings"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-087",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Hard",
    "content": {
      "question": "Which statements are false?",
      "options": {
        "A": "Every subset of a regular language is regular",
        "B": "Regular languages are closed under complement",
        "C": "Infinite union of regular languages is regular",
        "D": "Finite intersection of regular languages is regular"
      },
      "explanation": ""
    },
    "answer": ["A", "C"]
  },
  {
    "id": "Q-088",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which regex matches 'aba'?",
      "options": {
        "A": "(ab)*a",
        "B": "a(ba)*",
        "C": "both A and B",
        "D": "neither"
      },
      "explanation": ""
    },
    "answer": "C"
  },
  {
    "id": "Q-089",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "How many strings of length 4 are in L(a*b*)?",
      "options": {},
      "explanation": ""
    },
    "answer": "5"
  },
  {
    "id": "Q-090",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Arden's Theorem helps in:",
      "options": {
        "A": "Converting DFA to Regex",
        "B": "Converting Regex to DFA",
        "C": "Minimizing DFA",
        "D": "Pumping Lemma"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-091",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "The expression (0+1)*01 denotes strings:",
      "options": {
        "A": "Ending with 01",
        "B": "Containing 01",
        "C": "Starting with 01",
        "D": "None"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-092",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Hard",
    "content": {
      "question": "Find the number of strings of length 5 in L((0+1)*111)?",
      "options": {},
      "explanation": ""
    },
    "answer": "4"
  },
  {
    "id": "Q-093",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which regex is equivalent to phi?",
      "options": {
        "A": "0*phi",
        "B": "phi + epsilon",
        "C": "phi*",
        "D": "0 + phi"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-094",
    "topic": "Regular Expressions",
    "type": "Multiple Select",
    "difficulty": "Hard",
    "content": {
      "question": "Which of these are valid Regular Expressions?",
      "options": {
        "A": "((a+b)*)",
        "B": "a**",
        "C": "a+*b",
        "D": "(a+b)+c"
      },
      "explanation": ""
    },
    "answer": ["A", "B", "D"]
  },
  {
    "id": "Q-095",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "The size of the alphabet for the regex (a+b+c)* is:",
      "options": {},
      "explanation": ""
    },
    "answer": "3"
  },
  {
    "id": "Q-096",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "Which regex denotes the set of all strings over {0,1}?",
      "options": {
        "A": "(0+1)*",
        "B": "(0*1*)*",
        "C": "(0+1+01)*",
        "D": "All of the above"
      },
      "explanation": ""
    },
    "answer": "D"
  },
  {
    "id": "Q-097",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "Which of the following corresponds to 'strings with no consecutive a's'?",
      "options": {
        "A": "(b + ab)* (epsilon + a)",
        "B": "(b + ab)*",
        "C": "(b + a)*",
        "D": "(a + ba)*"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-098",
    "topic": "Regular Expressions",
    "type": "Numerical",
    "difficulty": "Medium",
    "content": {
      "question": "How many strings of length 3 are in (ab)*?",
      "options": {},
      "explanation": ""
    },
    "answer": "0"
  },
  {
    "id": "Q-099",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Medium",
    "content": {
      "question": "If R = 0*, L(R^3) is:",
      "options": {
        "A": "0*",
        "B": "000",
        "C": "0+",
        "D": "epsilon"
      },
      "explanation": ""
    },
    "answer": "A"
  },
  {
    "id": "Q-100",
    "topic": "Regular Expressions",
    "type": "Multiple Choice",
    "difficulty": "Hard",
    "content": {
      "question": "The regex (0*1*)* and (0+1)* are:",
      "options": {
        "A": "Equivalent",
        "B": "Not Equivalent",
        "C": "Disjoint",
        "D": "None"
      },
      "explanation": ""
    },
    "answer": "A"
  }
];