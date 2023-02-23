<script lang="ts">
	const form = {
		port: '3306',
		host: 'localhost',
		user: 'admin',
		password: '123456',
		type: 'MySql'
	};

</script>

<section class="h-screen flex items-center justify-center">
	<div class="min-w-[500px] p-6 bg-surface-700 rounded-md shadow-md">
		<form method="POST" action="?/login">
			<div class="grid grid-cols-2 gap-5">
				<label>
					<span>Host</span>
					<input type="text" name="host" class="w-full" bind:value={form.host} placeholder="Host" />
				</label>
				<label>
					<span>Port</span>
					<input type="text" name="port" class="w-full" bind:value={form.port} placeholder="Port" />
				</label>
			</div>
			<label>
				<span>Database type</span>
				<select name="type" bind:value={form.type}>
					<option value="MySql">MySql</option>
					<option value="MssQl">MssQl</option>
				</select>
			</label>
			<label>
				<span>Username</span>
				<input type="text" name="user" bind:value={form.user} placeholder="Username" />
			</label>
			<label>
				<span>Password</span>
				<input type="password" name="password" bind:value={form.password} placeholder="Password" />
			</label>
			<div class="flex gap-4 justify-end mt-3">
				<button type="submit" class="btn btn-filled-primary">Login</button>
			</div>
		</form>
	</div>
</section>
