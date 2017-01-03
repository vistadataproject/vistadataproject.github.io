


## [RPCL](TableOfContent.md) --> GMV ADD VM 

 property | value 
--- | --- 
 id | GMV_ADD_VM
 name | GMV ADD VM
 function | EN1^GMVDCSAV
 rpcType | CHANGE
 complexity | MEDIUM
 uses | 
 description | This remote procedure call is used to enter a new Vital/Measurement record\rin the GMRV Vital Measurement file (#120.5).\r \rThis remote procedure call is documented in Integration Agreement 3996.
 returnType | SINGLE VALUE
 returnDescription | 

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| GMRVDATA | LITERAL | true | This variable contains the data needed to create a Vital/Measurement\rrecord in the GMRV Vital Measurement (#120.5) file. The values are parsed\rout of the GMRVDATA variable and filed.\r \rGMRVDATA has the following data:\r piece1^piece2^piece3^piece4^piece5\r \r where:\r  piece1 = date/time in FileMan internal format\r  piece2 = patient number from FILE 2 (i.e., DFN)\r  piece3 = vital type, a semi-colon, the reading, a semi-colon, and \r           oxygen flow rate and percentage values [optional] (e.g.,\r           21;99;1 l/min 90%)\r  piece4 = hospital location (FILE 44) pointer value\r  piece5 = user number from FILE 200 (i.e., DUZ), an asterisk, and the \r           qualifier (File 120.52) internal entry numbers separated by\r           colons (e.g., 547*50:65) |  |  | 