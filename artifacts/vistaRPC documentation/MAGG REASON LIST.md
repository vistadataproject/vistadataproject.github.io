---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG REASON LIST 

 property | value 
--- | --- 
 label | MAGG REASON LIST
 tag | LSTRSNS
 routine | [MAGGA01](http://code.osehra.org/dox/Routine_MAGGA01_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure returns the list of reasons for actions performed onimages. This data is loaded from the MAG REASON file (#2005.88).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TYPE | LITERAL |  | true | This parameter defines the type(s) of reasons that are returned by the remote procedure. Its value should consist of one or more of the followingcharacters:   C  Reasons for copying images   D  Reasons for deleting images   P  Reasons for printing images   S  Reasons for changing image status For example, if the \CD\ value is assigned to the parameter, the RPCreturns the reasons for copying and deleting images. | 
| FLAGS | LITERAL |  |  | Flags that control execution (can be combined):   F  Include full details (description text, etc.)   I  Include inactivated reasons If this parameter is not defined or empty, only the summary data forcurrently active reasons is returned. | 
| PART | LITERAL |  |  | The partial match restriction (case sensitive). For example, a PART valueof \ZZ\ would restrict the list to those entries starting with the letters\ZZ\. If this parameter is not defined or empty, no text restrictions are applied. | 




Generated on January 11th 2017, 6:34:23 am