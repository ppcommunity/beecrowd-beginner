#include <iostream>
using namespace std;

int main()
{
    int N = 6, positive = 0;
    while(N--) {
        float X;
        cin >> X;
        if(X > 0) {
            positive++;
        }
    }
    cout << positive << " valores positivos" << endl;
    return 0;
}