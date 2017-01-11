---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC FILER 

 property | value 
--- | --- 
 label | EC FILER
 tag | FILE
 routine | [ECFLRPC](http://code.osehra.org/dox/Routine_ECFLRPC_source.html)
 return value type | GLOBAL ARRAY
 description | A general purpose Event Capture filer used when filing data into ECS files.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ECARY | LIST |  | true | The input array ECARY defines all the fields and values needed for a particular file.  The variable ECARY(\ECFILE\) must always be set to the file number wheredata will be saved.  The following are the options and file available       ECFILE       Option       ------       ------       721          Event Capture Patient File       724          DSS Unit       720.3        EC Event Code Screens       720.4        Event Code Reasons       725          EC Local Procedure       726          Event Capture Category       4            Event Capture Locations       200          Allocate/Deallocate users to Unit       200A         Allocate/Deallocate Units to user       8989.5       Update HFS directory | 




 Generated on January 11th 2017, 7:15:04 am