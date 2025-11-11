// Añadir clase active a enlace seleccionado (resalta el actual)
document.querySelectorAll('.offcanvas .nav-link').forEach(function (link) {
  link.addEventListener('click', function (e) {
    const hasCollapse = this.getAttribute('data-bs-toggle') === 'collapse';
    if (hasCollapse) return;

    document.querySelectorAll('.offcanvas .nav-link').forEach(function (l) {
      l.classList.remove('active');
    });
    this.classList.add('active');

    const offcanvasEl = document.querySelector('#sidebar');
    const bs = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (bs && window.innerWidth < 992) bs.hide();
  });
});

// Cerrar otros submenús al abrir uno
var collapseElList = [].slice.call(document.querySelectorAll('.collapse'));
collapseElList.forEach(function (collapseEl) {
  collapseEl.addEventListener('show.bs.collapse', function () {
    collapseElList.forEach(function (c) {
      if (c !== collapseEl) bootstrap.Collapse.getInstance(c)?.hide();
    });
  });
});

// Botón para abrir/cerrar sidebar (solo escritorio y móvil combinados)
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleSidebar');
const main = document.querySelector('.content-main'); // 🟢 referencia al main

if (toggleBtn && sidebar) {
  const bsSidebar = new bootstrap.Offcanvas(sidebar);

  toggleBtn.addEventListener('click', function () {
    if (window.innerWidth < 992) {
      bsSidebar.toggle();
    } else {
      document.body.classList.toggle('sidebar-hidden');
      if (document.body.classList.contains('sidebar-hidden')) {
        sidebar.style.marginLeft = `-${getComputedStyle(sidebar).width}`;
        document.body.style.paddingLeft = "0";
        main.classList.add('expanded-main'); // 🟢 expandir main
      } else {
        sidebar.style.marginLeft = "0";
        document.body.style.paddingLeft = "var(--sidebar-width)";
        main.classList.remove('expanded-main'); // 🟢 volver a tamaño normal
      }
    }
  });

  // Reajustar estilos al cambiar de tamaño de pantalla
  window.addEventListener('resize', function () {
    if (window.innerWidth < 992) {
      sidebar.style.marginLeft = "0";
      document.body.style.paddingLeft = "0";
      document.body.classList.remove('sidebar-hidden');
      main.classList.remove('expanded-main'); // 🟢 restablecer
    } else {
      if (!document.body.classList.contains('sidebar-hidden')) {
        document.body.style.paddingLeft = "var(--sidebar-width)";
      }

      const backdrop = document.querySelector('.offcanvas-backdrop');
      if (backdrop) backdrop.remove();

      const bsInstance = bootstrap.Offcanvas.getInstance(sidebar);
      if (bsInstance) bsInstance.hide();
    }
  });

  // 🟢 Detectar cuando se abre/cierra el offcanvas (modo móvil)
  sidebar.addEventListener('show.bs.offcanvas', () => {
    main.classList.remove('expanded-main');
  });
  sidebar.addEventListener('hidden.bs.offcanvas', () => {
    main.classList.add('expanded-main');
  });
}

// Esperar a que cargue todo el DOM
document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todas las pestañas
  const tabs = document.querySelectorAll('#myTab button');
  // Contenedor con scroll (el área del formulario)
  const scrollArea = document.querySelector('.tab-content');

  // Recorre cada pestaña
  tabs.forEach(tab => {
    tab.addEventListener('shown.bs.tab', function () {
      // Cuando se cambia de tab, hacer scroll al inicio
      scrollArea.scrollTo({
        top: 0,
        behavior: 'smooth' // movimiento suave
      });
    });
  });
});


  document.getElementById('toggleSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });
