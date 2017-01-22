---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC FILER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC FILER{:/}
 tag | {::nomarkdown}FILE{:/}
 routine | [ECFLRPC](http://code.osehra.org/dox/Routine_ECFLRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}A general purpose Event Capture filer used when filing data into ECS files.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The input array ECARY defines all the fields and values needed for a particular file.  The variable ECARY(\ECFILE\) must always be set to the file number wheredata will be saved.  The following are the options and file available       ECFILE       Option       ------       ------       721          Event Capture Patient File       724          DSS Unit       720.3        EC Event Code Screens       720.4        Event Code Reasons       725          EC Local Procedure       726          Event Capture Category       4            Event Capture Locations       200          Allocate/Deallocate users to Unit       200A         Allocate/Deallocate Units to user       8989.5       Update HFS directory{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}