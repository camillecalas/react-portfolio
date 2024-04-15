import React from 'react'

const FaqSection = () => {
  return (
	<div className="faq">
		<h2>Any questions ?  <span>FAQ</span></h2>
		<div className="question">
			<h4>How do I start ?</h4>
			<div className="answer">
				<p>Quisque vel congue tortor. </p>
				<p>Nullam laoreet gravida aliquam. Quisque rutrum arcu eu sapien volutpat venenatis. Donec eu imperdiet metus. </p>
			</div>
		</div>

		<div className="question">
			<h4>Daily schedule</h4>
			<div className="answer">
				<p>Donec ultricies nisi justo, at auctor massa</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio congue, aliquet lectus id, pulvinar ex. Vestibulum egestas molestie enim, luctus interdum ante finibus vitae. Integer sagittis auctor dui vel viverra. Aliquam tristique cursus ante, et maximus ligula viverra sed. Etiam sit amet massa eget lectus dapibus maximus. Suspendisse dolor purus</p>
			</div>
		</div>

		<div className="question">
			<h4>Different payment methods</h4>
			<div className="answer">
				<p>Quisque nec hendrerit neque, iaculis</p>
				<p>Sed non velit ut odio vulputate suscipit eu ornare urna. Sed sodales nec mauris eget porttitor. Curabitur id tempus dui, a rhoncus risus. Ut pellentesque, lacus eu suscipit cursus, ante leo iaculis mauris, in maximus ante ante nec risus. Fusce imperdiet erat elementum dictum commodo. Vivamus suscipit nisl vitae </p>
			</div>
		</div>

		<div className="question">
			<h4>What products do you offer</h4>
			<div className="answer">
				<p>Curabitur eget dignissim turpis, et pellentesque lorem.</p>
				<p>Nullam sit amet ornare turpis, fermentum scelerisque risus. Mauris eu sem at tortor porttitor molestie. Fusce eu eleifend risus. Morbi </p>
			</div>
		</div>
	</div>
  )
}

export default FaqSection