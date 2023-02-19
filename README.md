### SuperYoutube🚀, Version 1.0.0

Features-

1.Debouncing with 200ms,improving the "🔍search" by reducing the API call 
  on frequent key press.


Debouncing with 200ms - if difference between 2 key strokes is <200ms
 - DECLINE API call 
 - >200ms make an API call

Perfomance: 
On searching "iphone pro max 📱"
- 14 letter * 1000 users = 140000 API calls  
- with debouncing, 3 API calls * 1000 users = 3000 API calls

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

2.Further optimized the search by storing the results in cache using redux
store and searching the results from store.

Keeping in mind ⏳- 
Cache:
time complexity to search in array = O(n) 
time complexity tro search in Object = O(1)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
3.Nested comments💬 to multiple level using the concept of "Recursion"

4.Powered the data layer with Youtube's Live API.

5.Implemented Live Chat ✅, using the concept of API polling by using
  setInterval(()=>{},2000);
