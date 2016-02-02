VISTA Data Project (VDP) github-hosted Web Site, hosted at __[http://vistadataproject.info](http://vistadataproject.info)__

Configuration Notes
=====================

layout and organization from [poole](https://github.com/poole/poole)

To write blogs:
* install [jekyll](https://help.github.com/articles/using-jekyll-with-pages/)
* in the base directory, run __jekyll server --watch__
  or to write and see drafts, place the draft in _drafts_ and use __jekyll server --watch --drafts localhost:4000__
* go to __localhost:4000__ in your browser to see the site
* to add or edit posts, change or add to the dated entries in the _posts directory
* to publish them on the public site, just commit and push them
* note that all authors need to be described in the _authors_ list of _config.yml_

To edit the Poole-based theme look at:
* _config.yml
* _layouts
* _includes
* _sass (style sheets)
