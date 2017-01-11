---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTAPI LISTONE 

 property | value 
--- | --- 
 label | YTAPI LISTONE
 tag | LISTONE
 routine | [YTAPI](http://code.osehra.org/dox/Routine_YTAPI_source.html)
 return value type | ARRAY
 description | This API returns all psychological test administrations for a specified patient during a specified time period  for a specified test or instrument. If a scale is also specified, scoring for that scale is returned. User must have adequate privileges to receive this information (i.e. often the YSP KEY).   Input:       DFN : patient internal identifier       CODE: Test code from file 601 including \ASI\ and \GAF\ e.g. \CAGE\, \BDI\       BEGIN: inclusive date in %DT acceptable format (11/11/2011) tobegin search [optional]       END: inclusive date in %DT acceptable format (11/11/2011) to end search  [optional]       LIMIT: constrains to the last N administrations [optional]       Scale: scale number from file 601 or 1-7 on ASI [optional]Output:YSDATA(1)=[DATA]YSDATA(x)= internal administration date ^ external administrationdate^test code [^scale name^raw score^transformed score] Data is sorted in order of most recent administration to the oldest administration. If no administrations are found Array(2) will not be returned. If patient has no psych testing at all ,an error will be returned.




Generated on January 11th 2017, 6:34:23 am