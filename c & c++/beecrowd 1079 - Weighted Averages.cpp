#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    int N;
    cin >> N;
    while(N--) {
        float X, Y, Z;
        cin >> X >> Y >> Z;
        cout << fixed << setprecision(1) << ((X * 2) + (Y * 3) + (Z * 5)) / 10 << endl;
    }
    return 0;
}