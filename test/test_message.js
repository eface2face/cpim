/**
 * Dependencies.
 */
var
	Message = require('../lib/Message'),
	expect = require('expect.js');


describe('creating messages', function () {

	it('message is created', function () {
		var
			message = new Message(),
			PRINTED =
				'From: Iñaki Baz Castillo <im:inaki.baz@eface2face.com>\r\n' +
				'To: Alicia <im:alicia@atlanta.com>\r\n' +
				'Subject: Urgent, read pliz pliz\r\n' +
				'\r\n' +
				'Content-Type: text/plain\r\n' +
				'Content-Length: 5\r\n' +
				'\r\n' +
				'HELLO';

		// Set message fields.

		message.from({
			name: 'Iñaki Baz Castillo',
			uri: 'im:inaki.baz@eface2face.com'
		});

		message.to({
			name: 'Alicia',
			uri: 'im:alicia@atlanta.com'
		});

		message.subject('Urgent, read pliz pliz');

		message.contentType({
			type: 'text',
			subtype: 'plain'
		});

		message.mimeHeader('Content-Length', '5');

		message.body('HELLO');

		// Verify field values.

		expect(message.from().name).to.be('Iñaki Baz Castillo');
		expect(message.from().uri).to.be('im:inaki.baz@eface2face.com');

		expect(message.to().name).to.be('Alicia');
		expect(message.to().uri).to.be('im:alicia@atlanta.com');

		expect(message.subject()).to.be('Urgent, read pliz pliz');

		expect(message.contentType()).to.eql({
			type: 'text',
			subtype: 'plain',
			value: 'text/plain'
		});

		// Verify printed message.

		expect(message.toString()).to.be(PRINTED);
	});

});
