var expect = require('chai').expect,
    date  = require('../src/components/date.js');

describe('Date Checking', function() {

  var birthday  = new Date('1/16/1991');

  describe('day(date, day)', function() {
    var day = date.day;
    var wednesday = birthday;

    it('should be true for matching days', function() {
      expect(day(wednesday, 'wednesday')).to.be.true;
    })

    it('should be false for non-matching days', function() {
      expect(day(wednesday, 'thursday')).to.be.false;
    })
  })

  describe('today(date)', function() {
    var today     = date.today,
        now       = new Date(),
        tomorrow  = now.setDate(now.getDate + 10);

    it('should be true for today', function() {
      expect(today(new Date())).to.be.true
    })

    it('should be false for past date', function() {
      expect(today(birthday)).to.be.false;
    })

    it('should be false for future date', function() {
      expect(today(tomorrow)).to.be.false;
    })

  })

  describe('yesterday(date)', function() {
    var yesterday = date.yesterday,
        now       = new Date(),
        prior     = new Date(now.setDate(now.getDate -1));


    it('should be true for yesterday', function() {
      expect(yesterday(prior)).to.be.false;
    })

    it('should be false for before yesterday', function() {
      var now     = new Date(),
          daysAgo = new Date(now.setDate(now.getDate() - 4))

      expect(yesterday(daysAgo)).to.be.false
    })

    it('should be false after yesterday', function() {
      expect(yesterday(now)).to.be.false;
    })
  })

  describe('tomorrow(date)', function() {
    var tomorrow  = date.tomorrow,
        now       = new Date()
        later     = new Date(now.setDate(now.getDate() + 1)),


    it('should be true for future date', function() {
      expect(tomorrow(later)).to.be.true;
    })

    it('should be false if date is today', function() {
      expect(tomorrow(new Date())).to.be.false;
    })

    it('should be false for past date', function() {
      expect(tomorrow(birthday)).to.be.false;
    })


  })

  describe('month(date, target)', function() {
    var month = date.month

    it('should be true if date is in month', function(){
      expect(month(birthday, 'january')).to.be.true;
    })

    it('should be false if date is not in month', function() {
      expect(month(birthday, 'october')).to.be.false;
    })
  })

  describe('year(date, target)', function() {
    var year = date.year;

    it('should be true if year contains date', function(){
      expect(year(birthday, 1991)).to.be.true;
    })

    it('should be false if year does not contain date', function() {
      expect(year(birthday, 2016)).to.be.false;
      expect(year(birthday, 1990)).to.be.false;
      expect(year(birthday, 2000)).to.be.false;
    })
  })

  describe('past(date, delta)', function() {
    var past      = date.past,
        today     = new Date(),
        yesterday = new Date(today.setDate(today.getDate() - 1)),
        delta     = (1000*60*60*25) // A little over 1 day


    it('should be true if date is in the past within ms delta', function() {
      expect(past(yesterday, delta)).to.be.true;
    })

    it('should be false if date out of delta range', function() {
      expect(past(yesterday, 1000)).to.be.false;
    })
  })

  describe('future(date, delta)', function() {
    var future    = date.future
        today     = new Date(),
        yesterday = new Date(today.setDate(today.getDate -1))
        delta     = (1000*60*60*24) // 1 day
  })

  describe('weekend(date)', function() {
    var weekend = date.weekend,
    wednesday   = new Date('01/16/1991'),
    saturday    = new Date('01/19/1991');

    it('Should be false for a weekday', function() {
      expect(weekend(wednesday)).to.be.false;
    });

    it('should be true for a weekend', function() {
      expect(weekend(saturday)).to.be.true;
    })
  })

  describe('weekday(date)', function() {
    var weekday = date.weekday,
        wednesday = new Date('01/16/1991'),
        saturday  = new Date('01/19/1991');

    it('Should be true for a weekday', function() {
      expect(weekday(wednesday)).to.be.true;
    });

    it('should be false for a weekend', function() {
      expect(weekday(saturday)).to.be.false;
    })
  })

  describe('within(date, start, end)', function() {
    var within = date.within,
        birthday = new Date('1/16/1991'),
        afterward = new Date('1/23/1991');

    it('should be true for date within start/end', function(){
      var date = new Date('1/18/1991');

      expect(within(date, birthday, afterward)).to.be.true;
    })

    it('should be false for date past end', function() {
      var date = new Date('1/27/1991');

      expect(within(date, birthday, afterward)).to.be.false;
    })

    it('should be false for date before start', function() {
      var date = new Date('1/14/1991');

      expect(within(date, birthday, afterward)).to.be.false;
    })

  })

})