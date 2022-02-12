## :book: Page

````
/<root>
  └ 404 => redirect('/')
````

## :toolbox: Components

````
Index
  │  
  │  (!user)
  │    ▽
  ├─ Landing
  │  ├─ Title
  │  ├─ Sign In Button
  │  └─ Sign Up Button
  │  
  │  (user)
  │    ▽
  ├─ Dashboard 
  │  │
  │  ├─ Header
  │  │  └─ Section Indicator
  │  │
  │  ├─ Main
  │  │  ├─ Ongoing Section
  │  │  └─ Completed Section
  │  │
  │  └─ Todo Form
  │
  ├─ Footer
  │   ├─ Dashboard Button
  │   └─ AccounTab Button
  │
  └─ AccountTab
      │
      ├─ Header
      │   ├─ Close Button
      │   └─ Title
      │
      ├─ Main
      │   ├─ User Information
      │   └─ Form
      │
      └─ Footer
          └─ Sign Out Button
````

## :red_circle: Error Handling

Using [`firerr`](https://npmjs.com/package/firerr) To Handle Asynchronous Firebase Errors.

## :smile: Users Data

1. Create New Document In `users/${user.uid}`
2. Get The Document From Firebase
3. Store The Document Snapshot Into A State Variables
4. Use The Userdata From The Variables To Show The Public Credentials In `<AccountTab />`

## :information_source: Additional Information

Start Working: 2022-2-8
Finish 1st Prod: 2022-2-11

Contributor:
* @qwyzex
* @xc17