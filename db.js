const { pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new({

    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('connected to the db');
});

CREATE TABLE public.users
(
    id_user integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    firstname character varying(200) COLLATE pg_catalog."default",
    lastname character varying(200) COLLATE pg_catalog."default",
    othername character varying(200) COLLATE pg_catalog."default",
    email character varying(200) COLLATE pg_catalog."default",
    phonenumber numeric(15,0),
    username character varying(200) COLLATE pg_catalog."default",
    registered date NOT NULL DEFAULT CURRENT_DATE,
    isadmin boolean DEFAULT false,
    password character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (id_user)
)


CREATE TABLE public.rsvp
(
    id_rsvp integer NOT NULL DEFAULT nextval('rsvp_id_seq'::regclass),
    meetup numeric(2,0),
    "User" numeric(2,0),
    response character(20) COLLATE pg_catalog."default",
    CONSTRAINT rsvp_pkey PRIMARY KEY (id_rsvp)
)

CREATE TABLE public.votes
(
    vote_id bigint NOT NULL DEFAULT nextval('votes_vote_id_seq'::regclass),
    id_user numeric NOT NULL,
    question numeric NOT NULL,
    upvotes numeric NOT NULL,
    downvotes numeric NOT NULL,
    CONSTRAINT votes_pkey PRIMARY KEY (vote_id)
)

CREATE TABLE public.question
(
    id_question bigint NOT NULL DEFAULT nextval('"Question_id_seq"'::regclass),
    createdon date DEFAULT CURRENT_DATE,
    createdby character(20) COLLATE pg_catalog."default",
    meetup numeric(2,0),
    tittle character varying(200) COLLATE pg_catalog."default",
    body character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT "Question_pkey" PRIMARY KEY (id_question)
)

CREATE TABLE public.meetups
(
    id_meetup integer NOT NULL DEFAULT nextval('"meetUp_id_seq"'::regclass),
    createdon date NOT NULL DEFAULT now(),
    images character varying(100) COLLATE pg_catalog."default",
    topic character varying(100) COLLATE pg_catalog."default" NOT NULL,
    happeningon date,
    tags character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT "meetUp_pkey" PRIMARY KEY (id_meetup)
)

CREATE TABLE public.comments
(
    comment_id bigint NOT NULL DEFAULT nextval('comments_comment_id_seq'::regclass),
    question_id bigint NOT NULL,
    user_id bigint NOT NULL,
    comment text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT comments_pkey PRIMARY KEY (comment_id)
)

