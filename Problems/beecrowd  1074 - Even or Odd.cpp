#include <iostream>
using namespace std;

int main()
{
    int X, N;
    cin >> X;
    while(X--) {
        cin >> N;
        if(N == 0) {
            cout << "NULL" << endl;
            continue;
        }
        if(N % 2) cout << "ODD ";
        else if(N % 2 == 0) cout << "EVEN ";
        if(N < 0) cout << "NEGATIVE" << endl;
        else if(N > 0) cout << "POSITIVE" << endl;
    }
    return 0;
}