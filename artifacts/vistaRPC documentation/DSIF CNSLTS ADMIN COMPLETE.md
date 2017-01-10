---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS ADMIN COMPLETE 

 property | value 
--- | --- 
 label | DSIF CNSLTS ADMIN COMPLETE
 tag | ADCOM
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | SINGLE VALUE
 description | This RPC allows for the admin completion of the selected Consult. Cloned from ORQQCN ADMIN COMPLETE

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFCIEN | LITERAL |  | true | This is the Consult IEN that you wish to administratively complete. | 
| vs:Input_Parameter-8994_02 | DSIFFL | LITERAL | 1 | true | This is the flag that specifies whether significant findings are present during the administrative complete update. 'Y' - Significant Findings'N' - No Significant Findings'U' - Unknown Significant Findings | 
| vs:Input_Parameter-8994_02 | DSIFCOM | LIST | 80 |  | This is the array of comments to be included with the administrative complete update. | 
| vs:Input_Parameter-8994_02 | DSIFRESP | LITERAL |  | true | This is the provider responsible for the action. | 
| vs:Input_Parameter-8994_02 | DSIFALRT | LITERAL | 1 | true | Flag to determine if alerts need to be sent: 'N' - No'Y' - Yes | 
| vs:Input_Parameter-8994_02 | DSIFALTO | LITERAL |  |  | List of NEW PERSON FILE (200) iens, semi-colon delimited for who needs to be alerted by the updates to this consult. | 
| vs:Input_Parameter-8994_02 | DSIFDT | LITERAL |  | true | Date of the administrative complete. | 