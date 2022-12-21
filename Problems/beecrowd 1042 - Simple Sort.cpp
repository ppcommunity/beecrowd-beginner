#include <iostream>
using namespace std;

int main()
{
    int x, y, z, X, Y, Z, temp;
    cin >> x >> y >> z;
    
    X = x;
    Y = y;
    Z = z;
    
    if(x > y) {
        temp = x;
        x = y;
        y = temp;
    }
    
    if(x > z) {
        temp = x;
        x = z;
        z = temp;
    }
    
    if(y > z) {
        temp = y;
        y = z;
        z = temp;
    }
    
    cout << x << endl << y << endl << z << endl;
    cout << endl;
    cout << X << endl << Y << endl << Z << endl;
    
    return 0;
}