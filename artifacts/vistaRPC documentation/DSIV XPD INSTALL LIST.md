---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPD INSTALL LIST 

 property | value 
--- | --- 
 label | DSIV XPD INSTALL LIST
 tag | INSLIST
 routine | [DSIVXPDU](http://code.osehra.org/dox/Routine_DSIVXPDU_source.html)
 return value type | ARRAY
 description | This will return a list of all the entries in the INSTALL file.  You passin either a KIDS Build name or the name portion of the Build name (aBuild name without the version number or patch number).  All Installsmatching that name will be returned in reverse chronological order (thenewest first).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIKID | LITERAL | 30 | true | This value will be used to do a Fileman lookup on the INSTALL file .01Name field.  This value can be a full Build name in the form:  <test><space><version>  or a patch <text>*<version>*<patch> This value can just be the text portion of the Build name. | 
| DSIALL | LITERAL | 1 | true | This parameter will only be used if the DSIKID input value is a patchdesignation name, that is a Build name with \*\. This is a Boolean value: 1/0   Default value = 0  if 1 then return only Installs whose Build name exactly matches the    value passed in DSIKID  if 0 then return all Installs whose Build name starts with the text    portion of a patch designation:  <text>*<version>*<patch> | 
| DSISTAT | LITERAL | 5 | true | This is a string of numbers which can be 0,1,2,3,4These numbers indicate the status of the KIDS Install Status  0:Loaded   1:Queued   2:Install Started   3:Install Completed  4:De-installed The only statuses that indicate a Build was actually installed are 2,3  3 indicates the install ran to completion successfully  2 indicates that the install started but never ran to completion.     There is no way to determine how far the install got just looking at     this status code. Default value = 23 | 




 Generated on January 11th 2017, 7:15:04 am