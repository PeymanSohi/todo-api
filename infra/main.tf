provider "digitalocean" {
  token = var.do_token
}

resource "digitalocean_droplet" "app" {
  name   = "todo-app"
  region = "nyc3"
  size   = "s-1vcpu-1gb"
  image  = "ubuntu-22-04-x64"
  ssh_keys = [digitalocean_ssh_key.default.id]
}

resource "digitalocean_ssh_key" "default" {
  name       = var.ssh_key_name
  public_key = file(var.ssh_public_key)
}
