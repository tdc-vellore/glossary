repo_data = [];
fetch("https://api.github.com/users/tdc-vellore/repos")
  .then((res) => res.json())
  .then((data) => (repo_data = data))
  .then((repo_data) => {
	console.log("| Name | Stars | Description |");
	console.log("| ---- | ---- | ---- |");
    repo_data.map((entry) => {
      console.log(
        `| ${entry.full_name} | ${entry.stargazers_count} | ${entry.description} |`
      );
    })}
  );
