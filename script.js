const modules = [
  {
    title: "DPI Smart Switcher",
    desc: "System pintar akan membantu DPI otomatis berjalan di atas Free Fire langsung (Sensivity 74%)."
  },
  {
    title: "Headtrick 10%",
    desc: "Fitur ini membantu drag semakin smooth dan minim getaran pada crosshair Free Fire (bukan aimlock)."
  },
  {
    title: "Settings Methode",
    desc: "System ini akan membantu setup device otomatis untuk experience drag lebih ringan."
  },
  {
    title: "Optimize FreeFire",
    desc: "Beberapa device akan mengalami peningkatan experience melalui gameplay yang smooth."
  },
  {
    title: "Touch Tracker (Low)",
    desc: "Coordination touch yang diproses otomatis membantu stabilkan sentuhan, hanya bekerja di device 64bit."
  }
];

const container = document.getElementById("modules");
if (!container) {
  console.error("Element with id 'modules' not found");
} else {
  modules.forEach((mod) => {
    const key = mod.title.replace(/\s+/g, "_");
    const state = localStorage.getItem(key) === "true";
    const card = document.createElement("div");
    card.className = "bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col justify-between h-full";

    card.innerHTML = `
      <h2 class="font-semibold text-lg mb-2">${mod.title}</h2>
      <p class="text-sm text-gray-400 mb-4">${mod.desc}</p>
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" id="${key}" ${state ? "checked" : ""}>
        <div class="w-11 h-6 bg-gray-600 rounded-full peer-checked:bg-blue-500 relative transition">
          <div class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 peer-checked:translate-x-5"></div>
        </div>
      </label>
    `;
    container.appendChild(card);

    const checkbox = card.querySelector("input");
    checkbox.addEventListener("change", (e) => {
      localStorage.setItem(key, e.target.checked);
    });
  });
}

document.getElementById("run-command").addEventListener("click", async () => {
  const output = document.getElementById("output");
  output.classList.remove("hidden");
  output.textContent = "Running shell command...";
  try {
    const res = await fetch("/api/run");
    const data = await res.json();
    output.textContent = res.ok ? data.output || "No output." : `Error: ${data.error}`;
  } catch (err) {
    output.textContent = `Error: ${err.message}`;
  }
});
