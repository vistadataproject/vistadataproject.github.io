---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Problem_Selection_List-125
# Problem Selection List (125)
This file contains information defining lists of problems commonly seen by a particular clinic or user.  These lists will be presented as menus to select from, to facilitate adding new problems.

<dl>
<dt>Global</dt><dd>^GMPL(125,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is a free text name for the list; it should contain the name of<br/>the clinic or user who will be the primary user(s) of this list, as this<br/>name will be used as an ID and a title. | STRING | INDEXED<br/>REQUIRED | 
**Date Last Modified**{::nomarkdown}<pre><code>  date_last_modified</code></pre>{:/} | .02 | This is the date[/time] this list was last changed in any way; this value<br/>is stuffed in by the Problem List pkg utilities that manage this file. | DATE-TIME |  | 
**Clinic**{::nomarkdown}<pre><code>  clinic</code></pre>{:/} | .03 | This is the clinic to be associated with this list.  This should be the<br/>primary clinic in which this list will be used to populate patient<br/>problem lists; when adding new problems for a patient from this clinic,<br/>this list will automatically be presented to select problems from. | POINTER | INDEXED | [Hospital_Location-44](Hospital_Location-44)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}