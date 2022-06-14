import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form'
import {Col, Container, FormGroup, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Formpract = ()=>{
  const { register, handleSubmit, formState: { errors }} = useForm({mode: "onchange"});
  const onSubmit = data => console.log(data);
  
  return (
    <Container className="text-left p-5">
    <h1>Registration Form</h1>
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <FormGroup as={Row} className="mb-3">
        <Form.Label column sm={2}>User Id</Form.Label>
        <Col sm={10}>
          <Form.Control placeholder="User Id" {...register('userid', {required: true, minLength:5, maxLength:12})}/>
          {errors.firstName && <span style={{color: "red"}}>Required and must be of length 5 to 12</span>}
        </Col>
      </FormGroup>

      <FormGroup as={Row} className="mb-3">
        <Form.Label column sm={2}>Password</Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" {...register('password', {required: true, minLength: 7, maxLength: 12})}/>
          {errors.password && <span style={{color: "red"}}>Required and must be of length 7 to 12</span>}
        </Col>
      </FormGroup>

      <FormGroup as={Row} className="mb-3">
        <Form.Label column sm={2}>Name</Form.Label>
        <Col sm={10}>
          <Form.Control placeholder="Name" {...register('name', {required: true, pattern: /[A-Za-z]/})}/>
          {errors.name && <span style={{color: "red"}}>Required and alphabetes only</span>}
        </Col>
      </FormGroup>

      <FormGroup as={Row} className="mb-3">
        <Form.Label column sm={2}>Address</Form.Label>
        <Col sm={10}>
          <Form.Control placeholder="Address" {...register('address')}/>
        </Col>
      </FormGroup>

      <FormGroup as={Row} className="mb-3">
        <Form.Label column sm={2}>Country</Form.Label>
        <Col sm={10}>
        <Form.Select name="country" {...register('country', {required: true})}>
          <option value= "">(Please select a country)</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Japan">Japan</option>
          <option value="China">China</option>
          <option value="USA">USA</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Germany">Germany</option>
        </Form.Select>
        {errors.country && <span style={{color: "red"}}>Required. Must select a country</span>}
        </Col>
      </FormGroup>

     <FormGroup as={Row} className="mb-3">
       <Form.Label column sm={2}>Zipcode</Form.Label>
       <Col sm={10}>
         <Form.Control placeholder="530016" {...register('zipcode', {required: true, pattern: /[0-9]/})}/>
         {errors.zipcode && <span style={{color: "red"}}>Required and numeric only</span>}
       </Col>
     </FormGroup>

     <FormGroup as={Row} className="mb-3">
      <Form.Label column sm={2}>Personal Email</Form.Label>
      <Col sm={10}>
        <Form.Control placeholder="yourname@dcompany.com" {...register('personalemail', 
          {required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/})}/>
        {errors.personalemail && <span style={{color: "red"}}>Required. Must be a valid email</span>}
      </Col>
     </FormGroup>

    <FormGroup as={Row} className="mb-3">
      <Form.Label column sm={2}>Professional Email</Form.Label>
      <Col sm={10}>
        <Form.Control placeholder="yourname@orgdomain.com" {...register('proemail', 
          {required: true, 
            pattern: /^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!mail\.ru)(?!yandex\.ru)(?!mail\.com)([\w-]+.)+[\w-]{2,4})?$/})}/>
        {errors.proemail && <span style={{color: "red"}}>Required. please enter your business email</span>}
      </Col>
    </FormGroup>

     <FormGroup as={Row} className="mb-3">
       <Form.Label column sm={2}>Sex</Form.Label>
       <Col sm={10}>
         <Form.Check inline type="radio" label= "Male" name="sex" value={"Male"} 
          {...register('sex', {required: true})}/>
         <Form.Check inline type="radio" label= "Female" name="sex" value={"Female"} 
          {...register('sex', {required: true})}/>
         {errors.sex && <span style={{color: "red"}}>Required</span>}
       </Col>
     </FormGroup>

    <FormGroup as={Row} className="mb-3">
      <Form.Label column sm={2}>Languages</Form.Label>
      <Col sm={10}>
        <Form.Check inline type="checkbox" label= "English" name="language" value={"English"} 
          {...register('language', {required: true})}/>
        <Form.Check inline type="checkbox" label= "Non-English" name="language" value={"Non-English"} 
          {...register('language', {required: true})}/>
        {errors.language && <span style={{color: "red"}}>Required</span>}
      </Col>
    </FormGroup>

    <FormGroup as={Row} className="mb-3">
      <Form.Label column sm={2}>About</Form.Label>
      <Col sm={10}>
        <Form.Control as={"textarea"} rows={4} {...register('about')}/>
      </Col>
    </FormGroup>
    
    <FormGroup style={{textAlign: "center"}}>
      <Button variant="primary" onSubmit={handleSubmit} type="submit">Submit</Button>
      </FormGroup>

    </Form>
    </Container>
  );
}


export default Formpract;