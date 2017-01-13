---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PXRM REMINDER DIALOG (TIU) 

 property | value 
--- | --- 
 label | {::nomarkdown}PXRM REMINDER DIALOG (TIU){:/}
 tag | {::nomarkdown}TDIALOG{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Dialog for a given dialog ien.{:/}


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}ORDLG<br/>DFN{:/}
 Lines | ```
 D DIALOG^PXRMRPCD(.ORY,ORDLG,DFN)
 I $P($G(ORY(1)),U)=-1 Q
 S ORY(0)=0_U_+$P($G(^PXRMD(801.41,ORDLG,0)),U,17)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIALOG IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Reminder Dialog ien from #801.41{:/} | 




 Generated on January 13th 2017, 6:55:29 am