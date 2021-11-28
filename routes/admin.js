import express from 'express';
import bcrypt from 'bcrypt';
import passport from 'passport';
import { ensureLoggedOut } from 'connect-ensure-login';

import { runInsert } from '../lib/user';

var router = express.Router();

router.get('/', (req, res) => {
  res.render('admin', { title: 'Express' });
});

router.get('/movie', (req, res) => {
  res.render('movie', { title: 'Express' });
});

router.post('/movie', async (req, res) => {
  res.render('movie', { title: 'Express' });
});

router.get('/addmovie', (req, res) => {
  res.render('addmovie', { title: 'Express' });
});

router.post('/addmovie', async (req, res) => {
  const { poster, mvnum, mvtitle, mvpd, actor } = req.body;

  runInsert(
    'INSERT INTO 영화 VALUES (:1,AUTO_INCRSEMENT_MOVIE.nextvalue , :2, :3, :4)',
    [poster, mvtitle, mvpd, actor]
  );
});

router.get('/schedule', (req, res) => {
  res.render('schedule', { title: 'Express' });
});

router.post('/schedule', async (req, res) => {
  res.render('schedule', { title: 'Express' });
});

router.get('/addschedule', (req, res) => {
  res.render('addschedule', { title: 'Express' });
});

router.post('/addschedule', async (req, res) => {
  const { poster, mvnum, mvtitle, mvpd, actor } = req.body;

  runInsert('INSERT INTO 상영시간 VALUES (:1, :2, :3, :4)', [
    mvnum,
    teatime,
    teanum,
    cost,
  ]);
});
export default router;
