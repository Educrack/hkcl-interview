import moment from 'moment';

export function getDate(month: number, year: number) {
  return `${month}, ${year}`;
}

export function getMonthYear(date: string) {
  const [month, year] = date.split(',');
  return {
    month,
    year,
  };
}

export function getDuration(fromDate: string, toDate: string) {
  if (!fromDate) {
    return '';
  }
  const fromMoment = moment(
    fromDate
      .split(',')
      .reverse()
      .join(',')
  );
  let toMoment = moment(),
    duration = '';
  if (!toDate) {
    toMoment = moment([moment().format('YYYY'), +moment().format('MM') - 1]);
  } else {
    toMoment = moment(
      toDate
        .split(',')
        .reverse()
        .join(',')
    );
  }
  const noOfMonths = toMoment.diff(fromMoment, 'month', true);
  const years = Math.floor(noOfMonths / 12);
  const months = noOfMonths % 12;

  if (months) {
    duration += months + (months === 1 ? ' month ' : ' months ');
  }
  if (years) {
    duration += years + (years === 1 ? ' year ' : ' years ');
  }
  return duration;
}
