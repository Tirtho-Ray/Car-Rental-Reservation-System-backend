test login: http://localhost:5000/api/auth/signup   req: post
test login: http://localhost:5000/api/auth/signin  req: post

test car route:
1:post a car: http://localhost:5000/api/cars    ==> access only admin need token
2:get all car : http://localhost:5000/api/cars/  ==> access all
2:get a car : http://localhost:5000/api/cars/#needcarid _id    ==> access all
3:delete a car: http://localhost:5000/api/cars/#needcarid _id     ==> access only admin need token
4:update a car: http://localhost:5000/api/cars/#needcarid _id    ==> access only admin need token


test booking Route:
1:post booking: http://localhost:5000/api/bookings ==>access only user
2:get all booking: http://localhost:5000/api/bookings ==>access only admin
3:get single booking: [http://localhost:5000/api/bookings](http://localhost:5000/api/bookings?carId=667058add98071052de44e3d&date=2024-06-15) ==>access only admin
4:user won booking: http://localhost:5000/api/bookings/my-booking ==>access only user need user token
5:patch a cars http://localhost:5000/api/cars/return   ==>access only admin


