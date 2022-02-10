export default function() {
    this.namespace = '/api';

    this.get('/students', function() {
        return {
            data: [{
                type: 'students',
                id: 1,
                attributes: {
                    registration: 1,
                    first: 'Aarthi',
                    last: 'N',
                    phone: 8903841274,
                    year: 4,
                    city: 'Namakkal'
                }
            }, {
                type: 'students',
                id: 2,
                attributes: {
                    registration: 2,
                    first: 'Barani',
                    last: 'R',
                    phone: 947841274,
                    year: 4,
                    city: 'Erode'
                }
            }, {
                type: 'students',
                id: 3,
                attributes: {
                    registration: 3,
                    first: 'Charu',
                    last: 'L',
                    phone: 7637384127,
                    year: 4,
                    city: 'Salem'
                }
            }]
        };
    });
}