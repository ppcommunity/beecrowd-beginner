#include <iostream>
using namespace std;

int main()
{
    int N, factorial = 1;
    cin >> N;
    for(int i = 2; i <= N; i++) {
        factorial = factorial * i;
    }
    cout << factorial << endl;
    return 0;
}