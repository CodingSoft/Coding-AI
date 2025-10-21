<script lang="ts">
	// Definir las acciones rápidas con sus respectivos iconos y textos.
	const quickActions = [
		{ icon: "🖼️", label: "Edición de imagen", prompt: "Ayúdame a editar esta imagen: " },
		{ icon: "🌐", label: "desarrollo web", prompt: "Necesito ayuda con desarrollo web: " },
		{ icon: "🔍", label: "Investigación en profundidad", prompt: "Investiga sobre este tema: " },
		{ icon: "🎨", label: "Generación de imágenes", prompt: "Genera una imagen de: " },
		{ icon: "✈️", label: "Planificador de viajes", prompt: "Planifica un viaje a: " },
		{ icon: "🛒", label: "Artefactos", prompt: "Necesito ideas para crear: " },
		{ icon: "🎥", label: "Generación de Video", prompt: "Genera un video sobre: " },
		{ icon: "💻", label: "Código", prompt: "Escribe código para: " },
		{ icon: "📝", label: "Haz un plan", prompt: "Ayúdame a planificar: " },
		{ icon: "📢", label: "Noticias", prompt: "Busca noticias sobre: " },
		{ icon: "🔎", label: "Analizar imagen", prompt: "Analiza esta imagen: " },
		{ icon: "📄", label: "Resumir texto", prompt: "Resume este texto: " },
		{ icon: "💡", label: "Obtén consejo", prompt: "Dame consejo sobre: " },
		{ icon: "✍️", label: "Ayúdame a escribir", prompt: "Ayúdame a escribir sobre: " },
		{ icon: "🌟", label: "Lluvia de ideas", prompt: "Genera ideas para: " },
	];

	// Función para manejar el clic en una acción rápida.
	const handleQuickAction = (_prompt: string) => {
		// Aquí se emitirá un evento o se actualizará el store con el prompt seleccionado.
		// Por ejemplo, usando un store de Svelte o despachando un evento personalizado.
	};
</script>

<div class="my-2 flex gap-2 overflow-x-auto rounded-lg bg-gray-800 p-2">
	{#each quickActions as action}
		<button
			on:click={() => handleQuickAction(action.prompt)}
			class="flex flex-col items-center justify-center whitespace-nowrap rounded-lg bg-gray-700 px-3 py-2 transition-colors hover:bg-gray-600"
			title={action.label}
		>
			<span class="text-lg">{action.icon}</span>
			<span class="mt-1 text-xs">{action.label}</span>
		</button>
	{/each}
</div>
