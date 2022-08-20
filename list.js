preMessage = () => {
  console.log("# Glossary");
  console.log("## List of projects done by TDC Vellore");
  console.log(
    "At TDC Vellore, we believe in learning while doing. Below is a list of the projects that our team has put out!"
  );
};

postMessage = () => {
  console.log("## For contributors");
  console.log(
    "Contributors are welcome! Get started by contributing to our projects! **Have a new idea?** Do tell us about it [***here***](https://github.com/orgs/tdc-vellore/discussions/1)!"
  );
  console.log("### Can't find your contributions?");
  console.log(
    "This list refreshes once a week on Monday at 12:00 AM UTC. Please be patient while it does :D"
  );
};

repo_data = [];
fetch("https://api.github.com/users/tdc-vellore/repos")
  .then((res) => res.json())
  .then((data) => (repo_data = data))
  .then((repo_data) => {
    preMessage();
    console.log("| **Name** | **Stars** | **Description** |");
    console.log("| ---- | ---- | ---- |");
    repo_data.map((entry) => {
      console.log(
        `| [**${entry.full_name}**](https://github.com/${entry.full_name}) | ${entry.stargazers_count} | ${entry.description} |`
      );
    });
    postMessage();
  });
