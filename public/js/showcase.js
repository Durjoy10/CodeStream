
document.addEventListener('DOMContentLoaded', function () {
    const codeCardsContainer = document.getElementById('codeCards');
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    // Sample data (replace this with your actual code data)
    const codes = [
        {
            _id: '1',
            projectName: 'Simple Calculator Using C++',
            description: 'The Simple Calculator is a basic console application that allows users to perform arithmetic operations like addition, subtraction, multiplication, and division. The user interacts with the calculator by entering an operator and two operands, and the calculator performs the corresponding operation and displays the result.',
            code: `#include <iostream>
using namespace std;

int main() {
    char op;
    double num1, num2;

    cout << "Enter operator (+, -, *, /): ";
    cin >> op;

    cout << "Enter two operands: ";
    cin >> num1 >> num2;

    switch(op) {
        case '+':
            cout << num1 << " + " << num2 << " = " << num1 + num2 << endl;
            break;
        case '-':
            cout << num1 << " - " << num2 << " = " << num1 - num2 << endl;
            break;
        case '*':
            cout << num1 << " * " << num2 << " = " << num1 * num2 << endl;
            break;
        case '/':
            if (num2 != 0)
                cout << num1 << " / " << num2 << " = " << num1 / num2 << endl;
            else
                cout << "Division by zero error!" << endl;
            break;
        default:
            cout << "Invalid operator!" << endl;
            break;
    }

    return 0;
}`
,
        },
        {
            _id: '2',
            projectName: 'TicTacToe game using C++',
            description: 
            "TicTacToe is a classic two-player game where participants take turns marking spaces in a 3x3 grid with Xs and Os. The objective is to be the first to place three of your marks in a horizontal, vertical, or diagonal row. Simple to learn yet challenging to master, TicTacToe is a timeless game of strategy and quick thinking, perfect for all ages.",
            code:  `#include <iostream>
            using namespace std;
            
            char board[3][3] = { {'1','2','3'}, {'4','5','6'}, {'7','8','9'} };
            char current_marker;
            int current_player;
            
            void drawBoard() {
                cout << " " << board[0][0] << " | " << board[0][1] << " | " << board[0][2] << endl;
                cout << "---|---|---" << endl;
                cout << " " << board[1][0] << " | " << board[1][1] << " | " << board[1][2] << endl;
                cout << "---|---|---" << endl;
                cout << " " << board[2][0] << " | " << board[2][1] << " | " << board[2][2] << endl;
            }
            
            bool placeMarker(int slot) {
                int row = slot / 3;
                int col = slot % 3;
            
                if (board[row][col] != 'X' && board[row][col] != 'O') {
                    board[row][col] = current_marker;
                    return true;
                }
                return false;
            }
            
            int winner() {
                for (int i = 0; i < 3; i++) {
                    if (board[i][0] == board[i][1] && board[i][1] == board[i][2])
                        return current_player;
                    if (board[0][i] == board[1][i] && board[1][i] == board[2][i])
                        return current_player;
                }
                if (board[0][0] == board[1][1] && board[1][1] == board[2][2])
                    return current_player;
                if (board[0][2] == board[1][1] && board[1][1] == board[2][0])
                    return current_player;
                return 0;
            }
            
            void swap_player_and_marker() {
                if (current_marker == 'X') current_marker = 'O';
                else current_marker = 'X';
            
                if (current_player == 1) current_player = 2;
                else current_player = 1;
            }
            
            void game() {
                cout << "Player one, choose your marker: ";
                char marker_p1;
                cin >> marker_p1;
            
                current_player = 1;
                current_marker = marker_p1;
            
                drawBoard();
                int player_won;
            
                for (int i = 0; i < 9; i++) {
                    cout << "It's player " << current_player << "'s turn. Enter your slot: ";
                    int slot;
                    cin >> slot;
            
                    if (slot < 1 || slot > 9) {
                        cout << "Invalid slot! Try again." << endl;
                        i--;
                        continue;
                    }
            
                    if (!placeMarker(slot - 1)) {
                        cout << "Slot occupied! Try again." << endl;
                        i--;
                        continue;
                    }
                    drawBoard();
            
                    player_won = winner();
            
                    if (player_won == 1) {
                        cout << "Player one won! Congratulations!" << endl;
                        break;
                    }
                    if (player_won == 2) {
                        cout << "Player two won! Congratulations!" << endl;
                        break;
                    }
                    swap_player_and_marker();
                }
                if (player_won == 0) cout << "It's a draw!" << endl;
            }
            
            int main() {
                game();
                return 0;
            }`
                     
            ,



        },

        {
            _id: '3',
            projectName: 'Student Grade Management System using C++',
            description: 
            "The Student Grade Management System is a C++ application designed to help educators manage and track student grades efficiently. This system allows users to add, edit, and delete student records, assign grades, and calculate overall performance. Featuring a user-friendly interface and robust functionality, it streamlines the process of academic record-keeping and ensures accurate and timely updates of student information.",
            code:  `#include <iostream>
            #include <vector>
            using namespace std;
            
            struct Student {
                string name;
                int grade;
            };
            
            void addStudent(vector<Student>& students) {
                Student new_student;
                cout << "Enter student name: ";
                cin >> new_student.name;
                cout << "Enter student grade: ";
                cin >> new_student.grade;
                students.push_back(new_student);
            }
            
            void displayStudents(const vector<Student>& students) {
                for (const auto& student : students) {
                    cout << "Name: " << student.name << ", Grade: " << student.grade << endl;
                }
            }
            
            int main() {
                vector<Student> students;
                int choice;
            
                while (true) {
                    cout << "1. Add Student" << endl;
                    cout << "2. Display Students" << endl;
                    cout << "3. Exit" << endl;
                    cout << "Enter your choice: ";
                    cin >> choice;
            
                    switch (choice) {
                        case 1:
                            addStudent(students);
                            break;
                        case 2:
                            displayStudents(students);
                            break;
                        case 3:
                            return 0;
                        default:
                            cout << "Invalid choice. Please try again." << endl;
                            break;
                    }
                }
                return 0;
            }
            `
                     
            ,



        },

        {
            _id: '4',
            projectName: 'Basic File I/O using C++',
            description: 'Basic File I/O in C++ involves reading from and writing to files, allowing programs to store and retrieve data persistently. Utilizing the fstream library, developers can create, open, close, and manipulate file contents. This fundamental capability is essential for tasks such as saving user data, logging program output, and processing input files, making it a crucial skill for C++ programmers.',
            code:  `#include <iostream>
            #include <fstream>
            using namespace std;
            
            int main() {
                ofstream outfile("example.txt");
            
                if (outfile.is_open()) {
                    outfile << "Hello, world!" << endl;
                    outfile << "This is a simple file I/O example." << endl;
                    outfile.close();
                } else {
                    cout << "Unable to open file for writing" << endl;
                }
            
                ifstream infile("example.txt");
                string line;
            
                if (infile.is_open()) {
                    while (getline(infile, line)) {
                        cout << line << endl;
                    }
                    infile.close();
                } else {
                    cout << "Unable to open file for reading" << endl;
                }
            
                return 0;
            }
            `
                     
            ,



        },

        {
            _id: '5',
            projectName: 'Simple Chatbot using C++',
            description: 'A Simple Chatbot in C++ is an introductory project that demonstrates basic artificial intelligence by simulating a conversation with users. Utilizing standard input and output streams, the chatbot responds to user queries with pre-defined answers. This project showcases fundamental programming concepts such as string manipulation, control structures, and conditional statements, making it an excellent learning tool for beginners in C++ programming.',
            code:  `#include <iostream>
            #include <string>
            using namespace std;
            
            string getResponse(const string& input) {
                if (input == "Hello") return "Hi there!";
                if (input == "How are you?") return "I'm just a program, but I'm doing fine!";
                if (input == "What's your name?") return "I am a simple chatbot.";
                return "I don't understand that.";
            }
            
            int main() {
                string user_input;
            
                cout << "Chatbot: Hello! Type something to start chatting (type 'exit' to quit)." << endl;
                while (true) {
                    cout << "You: ";
                    getline(cin, user_input);
            
                    if (user_input == "exit") break;
            
                    cout << "Chatbot: " << getResponse(user_input) << endl;
                }
            
                return 0;
            }
            `
                     
            ,



        },

        {
            _id: '6',
            projectName: 'Bank Account Management System using C++',
            description: 'The Bank Account Management System in C++ is a comprehensive application designed to handle various banking operations. Users can create accounts, deposit and withdraw funds, check balances, and view transaction histories. By leveraging object-oriented programming principles, this system ensures data encapsulation, security, and efficient handling of account-related tasks, providing a practical solution for managing personal or institutional banking activities.',
            code:  `#include <iostream>
            using namespace std;
            
            class BankAccount {
            private:
                double balance;
            
            public:
                BankAccount() : balance(0.0) {}
            
                void deposit(double amount) {
                    if (amount > 0) {
                        balance += amount;
                        cout << "Deposited: " << amount << endl;
                    } else {
                        cout << "Invalid amount!" << endl;
                    }
                }
            
                void withdraw(double amount) {
                    if (amount > 0 && amount <= balance) {
                        balance -= amount;
                        cout << "Withdrawn: " << amount << endl;
                    } else {
                        cout << "Invalid amount or insufficient balance!" << endl;
                    }
                }
            
                void displayBalance() const {
                    cout << "Current balance: " << balance << endl;
                }
            };
            
            int main() {
                BankAccount account;
                int choice;
                double amount;
            
                while (true) {
                    cout << "1. Deposit" << endl;
                    cout << "2. Withdraw" << endl;
                    cout << "3. Display Balance" << endl;
                    cout << "4. Exit" << endl;
                    cout << "Enter your choice: ";
                    cin >> choice;
            
                    switch (choice) {
                        case 1:
                            cout << "Enter amount to deposit: ";
                            cin >> amount;
                            account.deposit(amount);
                            break;
                        case 2:
                            cout << "Enter amount to withdraw: ";
                            cin >> amount;
                            account.withdraw(amount);
                            break;
                        case 3:
                            account.displayBalance();
                            break;
                        case 4:
                            return 0;
                        default:
                            cout << "Invalid choice. Please try again." << endl;
                            break;
                    }
                }
            
                return 0;
            }
            `
                     
            ,



        },
        // Add more code objects as needed
    ];

    // Function to generate code cards
    function generateCodeCards(searchTerm = '') {
        codeCardsContainer.innerHTML = ''; // Clear existing cards
        const filteredCodes = codes.filter(code => 
            code.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            code.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        filteredCodes.forEach(code => {
            // Create code card element
            const codeCard = document.createElement('div');
            codeCard.classList.add('col-md-4', 'mb-4');
            codeCard.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${code.projectName}</h5>
                        <p class="card-text">${code.description}</p>
                        <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#codeModal${code._id}">
                            View Code
                        </button>
                    </div>
                </div>
            `;
            codeCardsContainer.appendChild(codeCard);

            // Create modal for code snippet
            const codeModal = document.createElement('div');
            codeModal.classList.add('modal', 'fade');
            codeModal.id = `codeModal${code._id}`;
            codeModal.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${code.projectName}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <pre><code>${code.code}</code></pre>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(codeModal);
        });
    }

    // Call function to generate code cards initially with all codes
    generateCodeCards();

    // Handle search functionality
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim();
        generateCodeCards(searchTerm);
    });
});




















