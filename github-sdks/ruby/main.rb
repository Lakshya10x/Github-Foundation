require 'octokit'

client = Octokit::Client.new(access_token: ENV['GH_TOKEN'])


# Create new branch
client.create_ref(
"sharma10x/Github-Foundation",
"heads/sdks",
"5ca643a49d5f5eac97207bad995b9aaf7ea802af")
