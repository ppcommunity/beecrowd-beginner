#include <iostream>
using namespace std;

int main() {
    int X, Y, temp, sum = 0;
    cin >> X >> Y;
    
    if(Y < X) {
        temp = X;
        X = Y;
        Y = temp;
    }
    
    for (int i = X; i <= Y; i++) {
        if(i % 13) sum = sum + i;
    }
    
    cout << sum << endl;
    
    return 0;
}