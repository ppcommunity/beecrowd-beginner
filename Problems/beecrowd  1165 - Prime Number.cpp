#include <iostream>
using namespace std;

int main() {
  int t;
  cin >> t;
  while(t--) {
      int i, n;
      bool is_prime = true;
    
      cin >> n;
    
      if (n == 0 || n == 1) {
        is_prime = false;
      }
    
      for (i = 2; i <= n/2; ++i) {
        if (n % i == 0) {
          is_prime = false;
          break;
        }
      }
    
      if (is_prime)
        cout << n << " eh primo" << endl;
      else
        cout << n << " nao eh primo" << endl;
  }

  return 0;
}
