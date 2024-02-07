CREATE TABLE public.user_info (
	id uuid NOT NULL,
	city varchar(255) NULL,
	contact varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	first_name varchar(255) NOT NULL,
	house_number varchar(255) NULL,
	last_name varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	postcode varchar(255) NULL,
	"role" varchar(255) NULL,
	street_name varchar(255) NULL,
	CONSTRAINT user_info_email_key UNIQUE (email),
	CONSTRAINT user_info_pkey PRIMARY KEY (id),
	CONSTRAINT user_info_role_check CHECK (((role)::text = ANY ((ARRAY['ADOPTER'::character varying, 'OWNER'::character varying, 'ADMIN'::character varying])::text[])))
);

CREATE TABLE public.pet (
	age float8 NULL,
	chipped bool NULL,
	neutered bool NULL,
	vaccinated bool NULL,
	id uuid NOT NULL,
	owner_id uuid NOT NULL,
	description varchar(1000) NULL,
	breed varchar(255) NOT NULL,
	gender varchar(255) NOT NULL,
	"name" varchar(255) NULL,
	status varchar(255) NULL,
	"type" varchar(255) NOT NULL,
	CONSTRAINT pet_pkey PRIMARY KEY (id)
);

ALTER TABLE public.pet ADD CONSTRAINT fkjhgfteov0mr0kqoqyghtwxveg FOREIGN KEY (owner_id) REFERENCES public.user_info(id);

CREATE TABLE public.photo (
	is_main bool NULL,
	id uuid NOT NULL,
	pet_id uuid NOT NULL,
	file_name varchar(255) NULL,
	CONSTRAINT photo_pkey PRIMARY KEY (id)
);

ALTER TABLE public.photo ADD CONSTRAINT fkl3c7ljuisybcpkjcnr12gedx0 FOREIGN KEY (pet_id) REFERENCES public.pet(id);

INSERT INTO public.user_info(id, first_name, last_name, house_number, street_name, postcode, city, contact, email, password, role) VALUES ('2cf5480a-1bd0-11ee-be56-0242ac120002', 'Sophie', 'van Houten', '100', 'Voorstraat', '3512 AL', 'Utrecht', '+31 6 1234 5678', 'sophie.vanhouten@example.com', '$2a$12$RgFckUgNHPpnrYAvptdHkOxEYEJlIJhqsd.weopyyVlg6e9GiBkRK', 'OWNER');
INSERT INTO public.user_info(id, first_name, last_name, house_number, street_name, postcode, city, contact, email, password, role) VALUES ('2cf54b5c-1bd0-11ee-be56-0242ac120002', 'Lucas', 'Bakker', '22', 'Oudegracht', '3511 AM', 'Utrecht', '+31 6 2345 6789', 'lucas.bakker@example.com', '$2a$12$RgFckUgNHPpnrYAvptdHkOxEYEJlIJhqsd.weopyyVlg6e9GiBkRK', 'OWNER');
INSERT INTO public.user_info(id, first_name, last_name, house_number, street_name, postcode, city, contact, email, password, role) VALUES ('2cf54cb0-1bd0-11ee-be56-0242ac120002', 'Finn', 'de Haan', '471', 'Domplein', '3512 JE', 'Utrecht', '+31 6 3456 7890', 'finn.dehaan@example.com', '$2a$12$RgFckUgNHPpnrYAvptdHkOxEYEJlIJhqsd.weopyyVlg6e9GiBkRK', 'OWNER');
INSERT INTO public.user_info(id, first_name, last_name, house_number, street_name, postcode, city, contact, email, password, role) VALUES ('2cf54ddc-1bd0-11ee-be56-0242ac120002', 'Julia', 'van Dijk', '89', 'Singel', '1015 AD', 'Amsterdam', '+31 6 4567 8901', 'julia.vandijk@example.com', '$2a$12$RgFckUgNHPpnrYAvptdHkOxEYEJlIJhqsd.weopyyVlg6e9GiBkRK', 'OWNER');
INSERT INTO public.user_info(id, first_name, last_name, house_number, street_name, postcode, city, contact, email, password, role) VALUES ('2cf54efe-1bd0-11ee-be56-0242ac120002', 'Luna', 'Vermeer', '123', 'Damrak', '1012 LP', 'Amsterdam', '+31 6 5678 9012', 'luna.vermeer@example.com', '$2a$12$RgFckUgNHPpnrYAvptdHkOxEYEJlIJhqsd.weopyyVlg6e9GiBkRK', 'ADOPTER');

INSERT INTO public.pet(id, type, breed, gender, status, name, age, vaccinated, chipped, neutered, owner_id, description) VALUES ('4251fcc6-1bd4-11ee-be56-0242ac120002', 'Cat', 'European Shorthair',   'Male',     'Available', 'Milo',    1, true, true, true,    '2cf5480a-1bd0-11ee-be56-0242ac120002', 'This cat has shown signs of overstimulation while in the shelter. Lots of handling, playing with hands, and excessive petting can cause them to overstimulate, which can result in scratching and/or biting. This cat is looking for experienced cat owners who will watch this cat''s body language while interacting to note signs of overstimulation (tail waving, fur rippling, dilated pupils, ears turned back and quick body movements) and be willing to respect their boundaries. This cat will also benefit from interactive toys such as wands and ball spinners while playing. We are happy to speak with you more when you visit and can provide post-adoption resources. If you can give this cat mental stimulation, patience and space when they need it, please consider adopting! They would love to be your sidekick and buddy for life!');
INSERT INTO public.pet(id, type, breed, gender, status, name, age, vaccinated, chipped, neutered, owner_id, description) VALUES ('4251fba4-1bd4-11ee-be56-0242ac120002', 'Cat', 'Maine Coon',           'Male',     'Available', 'Boris',   2, true, true, false,   '2cf54b5c-1bd0-11ee-be56-0242ac120002', 'Introducing Boris, a majestic 2-year-old male Maine Coon cat in search of his forever home. With his impressive size and gentle nature, Boris is a captivating companion. His regal appearance and affectionate personality make him the perfect addition to a loving family. Experience the joy and wonder of life with Boris by your side.');
INSERT INTO public.pet(id, type, breed, gender, status, name, age, vaccinated, chipped, neutered, owner_id, description) VALUES ('4461fba4-1bd4-11ee-be56-0242ac120002', 'Cat', 'Ragdoll',              'Female',   'Available', 'Bella',   1, true, true, false,   '2cf54b5c-1bd0-11ee-be56-0242ac120002', 'Introducing Bella, an enchanting 1-year-old female Ragdoll cat eagerly awaiting her forever home. With her striking blue eyes and luxurious coat, Bella is a true beauty. She carries herself with grace and elegance, captivating everyone she meets. Bella has a gentle and affectionate nature, always seeking out cuddles and gentle pets. She loves to be in the company of her human companions and will happily curl up in your lap for hours of relaxation. Bella''s calm and gentle demeanor makes her a perfect fit for a peaceful and loving household. With her soft purrs and soothing presence, Bella will bring a sense of tranquility to your life. If you''re looking for a serene and loving feline companion, Bella is the one for you. Open your heart and home to Bella, and you''ll discover the endless love and companionship that she has to offer.');
INSERT INTO public.pet(id, type, breed, gender, status, name, age, vaccinated, chipped, neutered, owner_id, description) VALUES ('4251f8f2-1bd4-11ee-be56-0242ac120002', 'Dog', 'Golden Retriever',     'Male',     'Available', 'Jack',    3, true, true, true,    '2cf54cb0-1bd0-11ee-be56-0242ac120002', 'Meet Jack, a lovable 3-year-old Golden Retriever male dog waiting to find his forever home. With his golden coat and friendly nature, Jack is the perfect companion for an active family. He enjoys playtime and outdoor adventures, always ready to bring joy and love into your life. Give Jack the loving home he deserves and create unforgettable memories together.');
INSERT INTO public.pet(id, type, breed, gender, status, name, age, vaccinated, chipped, neutered, owner_id, description) VALUES ('4251f4d8-1bd4-11ee-be56-0242ac120002', 'Dog', 'Dutch Shepherd',       'Male',     'Available', 'Cooper',  1, true, true, true,    '2cf54ddc-1bd0-11ee-be56-0242ac120002', 'Cooper is a 1 year old golden retriever boy who lost his home after his dad could no longer care for him. This handsome hunk of a boy has the perfect Golden Retriever temperament! He has been working hard getting in shape for the summer and has already lost 7 pounds. He is learning to walk well on a leash and he LOVES, LOVES, LOVES car rides.  Cooper is good with other dogs, cats, kids according to the family that surrendered him. His original family had health issues so the son''s family stepped up to take in Cooper and find him a forever home. That was when they found out about what Golden Retriever Rescue Resource, GRRR, does to find these wonderful Goldens forever homes.');
INSERT INTO public.pet(id, type, breed, gender, status, name, age, vaccinated, chipped, neutered, owner_id, description) VALUES ('4251fa78-1bd4-11ee-be56-0242ac120002', 'Dog', 'French Bulldog',       'Female',   'Available', 'Micky',   1, true, true, true,    '2cf54ddc-1bd0-11ee-be56-0242ac120002', 'Introducing Micky, an adorable 1-year-old French Bulldog male dog eagerly awaiting his forever home. With his compact build, expressive eyes, and signature bat-like ears, Micky is a true head-turner. Despite his small stature, he possesses a big personality and a heart full of love. Micky is a playful and affectionate companion, always ready to charm you with his silly antics and playful nature. His cheerful demeanor and friendly disposition make him a joy to be around. Micky thrives on human companionship and enjoys being the center of attention. Whether it''s going for leisurely strolls in the park or cozying up on the couch for some snuggle time, Micky will be your constant companion. Micky is the perfect match to bring laughter and love into your life. Open your heart and home to Micky.');
INSERT INTO public.pet(id, type, breed, gender, status, name, age, vaccinated, chipped, neutered, owner_id, description) VALUES ('f2a16d46-b01c-402f-8c88-29e76c4258d7', 'Cat', 'Ginger',               'Female',   'Available', 'Gingi',   2, true, true, true,    '2cf54ddc-1bd0-11ee-be56-0242ac120002', 'Introducing Gingi, a delightful 2-year-old female cat eagerly awaiting her forever home. With her striking tabby coat and captivating green eyes, Gingi is a true beauty. She exudes grace and elegance with every step she takes. Gingi has a gentle and loving personality, always seeking affection and ready to curl up in your lap for a cozy snuggle. Despite her calm demeanor, she possesses a playful spirit and enjoys chasing feather toys and exploring her surroundings. Gingi''s loving nature extends to other animals and she would make a wonderful companion for existing pets. If you''re seeking a loving and sophisticated feline companion, Gingi is the purrfect addition to your family. Open your heart and home to Gingi, and you''ll be rewarded with a lifetime of love, warmth, and companionship.');
INSERT INTO public.pet(id, type, breed, gender, status, name, age, vaccinated, chipped, neutered, owner_id, description) VALUES ('57d3068c-fda0-46be-84d7-faf5e92b6e87', 'Cat', 'Turkish Van',          'Male',     'Available', 'Jacob',   1, true, true, true,    '2cf54cb0-1bd0-11ee-be56-0242ac120002', 'Meet Jacob, an adorable 1-year-old male cat eagerly waiting to find his forever home. Jacob is a charming and playful feline companion who will bring joy and love to your household. With his sleek coat and bright eyes, he is always ready for a cuddle or a fun play session. Jacob is known for his friendly nature and gets along well with other pets and children. He enjoys exploring his surroundings, but his favorite place is curled up on your lap, purring contently. If you''re looking for a loyal and affectionate companion, Jacob is the perfect match. Give him the loving home he deserves, and he will fill your days with endless happiness and companionship.');
INSERT INTO public.pet(id, type, breed, gender, status, name, age, vaccinated, chipped, neutered, owner_id, description) VALUES ('4050dfaa-3609-4e9b-9f7d-bb9cf8eb475f', 'Dog', 'Golden Retriever',     'Male',     'Available', 'Rico',    1, true, true, false,   '2cf5480a-1bd0-11ee-be56-0242ac120002', 'Introducing Rico, a charming 1-year-old male Golden Retriever searching for his forever home. With his friendly nature and playful spirit, Rico is the perfect canine companion. Ready to bring love and joy into your life.');



