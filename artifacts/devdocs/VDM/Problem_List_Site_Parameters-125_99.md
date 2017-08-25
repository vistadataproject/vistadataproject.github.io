---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Problem_List_Site_Parameters-125_99<br/>
<a name="top"></a>
# Problem List Site Parameters (125.99)
This file controls the behavior of the Problem List application for each site where it is installed.    There should be only one entry in this file!!

**Global:** ^GMPL(125.99,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 | This is the internal number of this file entry. | IEN |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the site, commonly HOSPITAL or VAMC. | STRING | INDEXED<br/>REQUIRED | 
**Verify Transcribed Problems**{::nomarkdown}<pre><code>  verify_transcribed_problems</code></pre>{:/} | 1 | This is a toggle which determines whether the PL application will<br/>flag entries made by a non-clinical user, and allow for subsequent<br/>confirmation of the entry by a clinician. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Prompt For Chart Copy**{::nomarkdown}<pre><code>  prompt_for_chart_copy</code></pre>{:/} | 2 | This is a toggle which determines whether the PL application will<br/>prompt the user to print a new chartable copy of the patient's list<br/>when exiting the application or changing patients, if the current<br/>patient's list has been modified. | ENUMERATION |  | {::nomarkdown}YES, ASK: <em><strong>1</strong></em><br/>NO, DON'T ASK: <em><strong>0</strong></em>{:/}
***use Clinical Lexicon**{::nomarkdown}<pre><code>  use_clinical_lexicon</code></pre>{:/} | 3 | ***This field is marked for deletion in preparation for the Problem<br/>List Data Standardization project and will be deleted 18 months from<br/>the release of patch GMPL*2*36.*** <br/> <br/>This is a toggle which determines whether the PL application will <br/>allow the user to search the Clinical Lexicon when adding or editing <br/>a problem; if a term is selected from the CL Utility, the standardized<br/>text will be displayed on the problem list, otherwise the text entered<br/>by the user to search on will be displayed.  Problems which are taken<br/>from the CLU may already be coded to ICD9, and this code is returned <br/>to the PL application if available.  Duplicate problems can be screened<br/>out, and searches by problem performed when this link to the CLU exists.<br/> <br/>If this flag is set to NO, the user will be prompted for his/her free<br/>text description of the problem only, when adding or editing a problem.<br/>No search will be performed at that time on the CLU, and no link made<br/>from the problem to an entry in the CLU. | BOOLEAN | DEPRECATED | 
**Display Order**{::nomarkdown}<pre><code>  display_order</code></pre>{:/} | 4 | This flag allows each site to control how the problem list is displayed,<br/>whether chronologically or reverse-chronologically by date recorded.<br/>This ordering will be the same both onscreen and on the printed copy.<br/>When new problems are added to a patient's list, they will be added as the<br/>most recent problems, i.e. at the top of the list if reverse-chronological<br/>or at the bottom if chronological. | ENUMERATION |  | {::nomarkdown}REVERSE-CHRONOLOGICAL: <em><strong>R</strong></em><br/>CHRONOLOGICAL: <em><strong>C</strong></em>{:/}
**Screen Duplicate Entries**{::nomarkdown}<pre><code>  screen_duplicate_entries</code></pre>{:/} | 6 | If YES is entered in this field duplicate problems (those having the same <br/>ICD9 code) will NOT be added to the problem list.  The primary purpose of<br/>this field in to screen entries added via the scannable encounter form. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}