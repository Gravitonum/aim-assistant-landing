import base64
import os
import math

# Paths
js_path = 'dist/public/assets/index.js'
output_prefix = 'tilda-block-js-part-'

# Read JS file
with open(js_path, 'rb') as f:
    js_content = f.read()

# Encode to Base64
b64_content = base64.b64encode(js_content).decode('utf-8')

# Chunk size (approx 80KB to be safe for Tilda limit)
CHUNK_SIZE = 80 * 1024
total_length = len(b64_content)
num_chunks = math.ceil(total_length / CHUNK_SIZE)

print(f"Total Base64 size: {total_length} bytes")
print(f"Creating {num_chunks} chunks of max {CHUNK_SIZE} bytes")

for i in range(num_chunks):
    start = i * CHUNK_SIZE
    end = start + CHUNK_SIZE
    chunk = b64_content[start:end]
    
    filename = f"{output_prefix}{i+1}.html"
    
    with open(filename, 'w') as f:
        f.write(f"<!-- BLOCK {i+2}: JS PART {i+1}/{num_chunks} -->\n")
        f.write("<script>\n")
        if i == 0:
            f.write("window.appB64 = '';\n")
        
        f.write(f"window.appB64 += '{chunk}';\n")
        
        # If last chunk, add decoder
        if i == num_chunks - 1:
            f.write("\n// Decode and Inject\n")
            f.write("try {\n")
            f.write("  const decoded = atob(window.appB64);\n")
            f.write("  const script = document.createElement('script');\n")
            f.write("  script.type = 'module';\n")
            f.write("  script.textContent = decoded;\n")
            f.write("  document.body.appendChild(script);\n")
            f.write("  console.log('App injected successfully');\n")
            f.write("} catch(e) {\n")
            f.write("  console.error('Failed to inject app:', e);\n")
            f.write("}\n")
        
        f.write("</script>\n")
    
    print(f"Created {filename} ({len(chunk)} chars in JS string)")

print("Done.")
