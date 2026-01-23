<script>
  let name = '';
  let email = '';
  let message = '';
  let submitted = false;

  function handleSubmit() {
    // Placeholder submit behavior
    submitted = true;

    // Later you can POST this to an API or backend
    console.log({ name, email, message });
  }
</script>

<section class="contact">
  <div class="container">
    <h1>Contact</h1>

    <p class="intro">
      Have a question, idea, or opportunity? Feel free to reach out.
    </p>

    {#if submitted}
      <div class="success">
        <p>Thanks for reaching out! I’ll get back to you soon.</p>
      </div>
    {:else}
      <form on:submit|preventDefault={handleSubmit}>
        <label>
          Name
          <input type="text" bind:value={name} required />
        </label>

        <label>
          Email
          <input type="email" bind:value={email} required />
        </label>

        <label>
          Message
          <textarea rows="5" bind:value={message} required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    {/if}
  </div>
</section>

<style>
  .contact {
    padding: 4rem 1.5rem;
    display: flex;
    justify-content: center;
  }

  .container {
    max-width: 700px;
    width: 100%;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }

  .intro {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: 0.4rem;
  }

  input,
  textarea {
    padding: 0.6rem 0.7rem;
    font-size: 1rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #555;
  }

  button {
    margin-top: 0.5rem;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background: #111;
    color: white;
  }

  button:hover {
    background: #000;
  }

  .success {
    padding: 1.25rem;
    border-radius: 6px;
    background: #f0fdf4;
    border: 1px solid #86efac;
  }
</style>
