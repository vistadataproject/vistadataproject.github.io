---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DOD GET STUDIES IEN
# MAG DOD GET STUDIES IEN

This Remote Procedure returns information about studies,based upon the IEN (File #2005 or #2005.1) of the image group, Patient Number,Study-Level Only Flag, and Include Deleted Images Flag that are provided as parameters.

Property | Value
--- | ---
Label | STUDY2
Routine | [MAGDQR21](http://code.osehra.org/dox/Routine_MAGDQR21_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GROUPS | LIST | 1000 | true | This parameter can either be provided as a single value or as an array.Each value found (either GROUPS or GROUPS(i)) will be evaluated by the Remote Procedure.Each value found must be the IEN in file #2005 or #2005.1 of a group of images.For each group specified, the Remote Procedure will find the study to whichthat group belongs, and then returna hierarchical list of all series and images in that study.
REQDFN | LITERAL | 50 | true | This parameter is Patient Number who owns the images.
IMGLESS | LITERAL | 1 | true | This parameter is an indicator whether to get only Study-Level or include all images.Pass &quot;1&quot; to get only Study-Level data.Pass null or empty string to include all images.
FLAGS | LITERAL | 1 | true | This parameter is an indicator whether to include or exclude &quot;Deleted&quot; Images.Pass &quot;D&quot; to include Deleted Images.Pass null or empty string to exclude Deleted Images



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}