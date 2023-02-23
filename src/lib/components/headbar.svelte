<script lang="ts">
	import { db } from '$lib/store/db.store';

</script>

<header class="border-b border-b-surface-600">
	<div>
		<span>
			<span>Database:</span>
			<span class="text-white">{$db.database}</span>
		</span>
	</div>
</header>
