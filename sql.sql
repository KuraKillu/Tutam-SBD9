CREATE TABLE users(
user_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
uname varchar(10) UNIQUE NOT NULL,
password text NOT NULL);

CREATE TABLE kucheng(
  cat_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cat_name varchar(30) NOT NULL,
  photo text NOT NULL,
  tl date NOT NULL, 
  ras varchar(30) NOT NULL,
  descript text,
  fromUser uuid
);