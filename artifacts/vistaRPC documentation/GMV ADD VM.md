---
layout: default
title: RPCL documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV ADD VM 

 property | value 
--- | --- 
 name-8994 | GMV ADD VM
 tag-8994 | EN1
 routine-8994 | GMVDCSAV
 return_value_type-8994 | SINGLE VALUE
 description-8994 | This remote procedure call is used to enter a new Vital/Measurement recordin the GMRV Vital Measurement file (#120.5). This remote procedure call is documented in Integration Agreement 3996.
 input_parameter-8994 | [{id:8994_02-1_1267,type:vs:Input_Parameter-8994_02,input_parameter-8994_02:GMRVDATA,parameter_type-8994_02:LITERAL,maximum_data_length-8994_02:255,required-8994_02:true,sequence_number-8994_02:1,description-8994_02:This variable contains the data needed to create a Vital/Measurementrecord in the GMRV Vital Measurement (#120.5) file. The values are parsedout of the GMRVDATA variable and filed. GMRVDATA has the following data: piece1^piece2^piece3^piece4^piece5  where:  piece1 = date/time in FileMan internal format  piece2 = patient number from FILE 2 (i.e., DFN)  piece3 = vital type, a semi-colon, the reading, a semi-colon, and            oxygen flow rate and percentage values [optional] (e.g.,           21;99;1 l/min 90%)  piece4 = hospital location (FILE 44) pointer value  piece5 = user number from FILE 200 (i.e., DUZ), an asterisk, and the            qualifier (File 120.52) internal entry numbers separated by           colons (e.g., 547*50:65)}]

### Input Parameters

| type | input_parameter-8994_02 | parameter_type-8994_02 | 
| --- | --- | --- | 
| vs:Input_Parameter-8994_02 | GMRVDATA | LITERAL | 