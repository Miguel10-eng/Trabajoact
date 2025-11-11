document.addEventListener('DOMContentLoaded', function () {
  // Modal original
  const sidebar = document.getElementById('sidebarForm');
  const tabla = document.getElementById('tablaContainer');
  const btnCerrar = document.getElementById('btnCerrarSidebar');
  const btnMostrar = document.getElementById('btnMostrarSidebar');

  if (sidebar && tabla && btnCerrar && btnMostrar) {
    btnCerrar.addEventListener('click', () => {
      sidebar.classList.add('hidden');
      tabla.classList.add('expanded');
      btnMostrar.classList.remove('d-none');
    });

    btnMostrar.addEventListener('click', () => {
      sidebar.classList.remove('hidden');
      tabla.classList.remove('expanded');
      btnMostrar.classList.add('d-none');
    });
  }

  // 🔹 Segundo modal (sin conflicto)
  const sidebar2 = document.getElementById('sidebarForm2');
  const tabla2 = document.getElementById('tablaContainer2');
  const btnCerrar2 = document.getElementById('btnCerrarSidebar2');
  const btnMostrar2 = document.getElementById('btnMostrarSidebar2');

  if (sidebar2 && tabla2 && btnCerrar2 && btnMostrar2) {
    btnCerrar2.addEventListener('click', () => {
      sidebar2.classList.add('hidden');
      tabla2.classList.add('expanded');
      btnMostrar2.classList.remove('d-none');
    });

    btnMostrar2.addEventListener('click', () => {
      sidebar2.classList.remove('hidden');
      tabla2.classList.remove('expanded');
      btnMostrar2.classList.add('d-none');
    });
  }
});