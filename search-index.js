var N = null;var searchIndex = {};
searchIndex["goji"]={"doc":"Goji provides an interface for Jira's REST api","items":[[3,"SearchOptions","goji","options availble for search",N,N],[3,"SearchOptionsBuilder","","a builder interface for search option Typically this is initialized with SearchOptions::builder()",N,N],[3,"Errors","","represents an general jira error response",N,N],[12,"error_messages","","",0,N],[12,"errors","","",0,N],[3,"Issue","","represents a single jira issue",N,N],[12,"self_link","","",1,N],[12,"key","","",1,N],[12,"id","","",1,N],[12,"fields","","",1,N],[12,"changelog","","",1,N],[3,"Attachment","","",N,N],[12,"id","","",2,N],[12,"self_link","","",2,N],[12,"filename","","",2,N],[12,"author","","",2,N],[12,"created","","",2,N],[12,"size","","",2,N],[12,"mime_type","","",2,N],[12,"content","","",2,N],[12,"thumbnail","","",2,N],[3,"Comments","","",N,N],[12,"comments","","",3,N],[3,"Comment","","",N,N],[12,"id","","",4,N],[12,"self_link","","",4,N],[12,"author","","",4,N],[12,"update_author","","",4,N],[12,"created","","",4,N],[12,"updated","","",4,N],[12,"body","","",4,N],[12,"visibility","","",4,N],[3,"Visibility","","",N,N],[12,"visibility_type","","",5,N],[12,"value","","",5,N],[3,"Changelog","","",N,N],[12,"histories","","",6,N],[3,"History","","",N,N],[12,"author","","",7,N],[12,"created","","",7,N],[12,"items","","",7,N],[3,"HistoryItem","","",N,N],[12,"field","","",8,N],[12,"from","","",8,N],[12,"from_string","","",8,N],[12,"to","","",8,N],[12,"to_string","","",8,N],[3,"IssueLink","","represents link relationship between issues",N,N],[12,"id","","",9,N],[12,"self_link","","",9,N],[12,"outward_issue","","",9,N],[12,"inward_issue","","",9,N],[12,"link_type","","",9,N],[3,"LinkType","","represents type of issue relation",N,N],[12,"id","","",10,N],[12,"inward","","",10,N],[12,"name","","",10,N],[12,"outward","","",10,N],[12,"self_link","","",10,N],[3,"Version","","",N,N],[12,"archived","","",11,N],[12,"id","","",11,N],[12,"name","","",11,N],[12,"released","","",11,N],[12,"self_link","","",11,N],[3,"User","","",N,N],[12,"active","","",12,N],[12,"avatar_urls","","",12,N],[12,"display_name","","",12,N],[12,"email_address","","",12,N],[12,"key","","",12,N],[12,"name","","",12,N],[12,"self_link","","",12,N],[12,"timezone","","",12,N],[3,"Status","","",N,N],[12,"description","","",13,N],[12,"icon_url","","",13,N],[12,"id","","",13,N],[12,"name","","",13,N],[12,"self_link","","",13,N],[3,"SearchResults","","",N,N],[12,"total","","",14,N],[12,"max_results","","",14,N],[12,"start_at","","",14,N],[12,"expand","","",14,N],[12,"issues","","",14,N],[3,"TransitionOption","","",N,N],[12,"id","","",15,N],[12,"name","","",15,N],[12,"to","","",15,N],[3,"TransitionTo","","",N,N],[12,"name","","",16,N],[12,"id","","",16,N],[3,"TransitionOptions","","contains list of options an issue can transitions through",N,N],[12,"transitions","","",17,N],[3,"TransitionTriggerOptions","","",N,N],[12,"transition","","",18,N],[12,"fields","","",18,N],[3,"TransitionTriggerOptionsBuilder","","",N,N],[12,"transition","","",19,N],[12,"fields","","",19,N],[3,"Resolution","","",N,N],[3,"Transition","","",N,N],[12,"id","","",20,N],[3,"Search","","Search interface",N,N],[3,"Transitions","","issue transition interface",N,N],[3,"EmptyResponse","","",N,N],[3,"Jira","","Entrypoint into client interface https://docs.atlassian.com/jira/REST/latest/",N,N],[4,"Error","","an enumeration over potential errors that may happen when sending a request to jira",N,N],[13,"Http","","error associated with http request",21,N],[13,"IO","","error associated IO",21,N],[13,"Serde","","error associated with parsing or serializing",21,N],[13,"Fault","","client request errors",21,N],[12,"code","goji::Error","",21,N],[12,"errors","","",21,N],[13,"Unauthorized","goji","invalid credentials",21,N],[13,"MethodNotAllowed","","HTTP method is not allowed",21,N],[13,"NotFound","","Page not found",21,N],[4,"Credentials","","Types of authentication credentials",N,N],[13,"Basic","","username and password credentials",22,N],[11,"builder","","return a new instance of a builder for options",23,[[],["searchoptionsbuilder"]]],[11,"serialize","","serialize options as a string. returns None if no options are defined",23,[[["self"]],["option",["string"]]]],[11,"as_builder","","",23,[[["self"]],["searchoptionsbuilder"]]],[11,"new","","",24,[[],["searchoptionsbuilder"]]],[11,"fields","","",24,[[["self"],["vec"]],["searchoptionsbuilder"]]],[11,"validate","","",24,[[["self"],["bool"]],["searchoptionsbuilder"]]],[11,"max_results","","",24,[[["self"],["u64"]],["searchoptionsbuilder"]]],[11,"start_at","","",24,[[["self"],["u64"]],["searchoptionsbuilder"]]],[11,"type_name","","",24,[[["self"],["str"]],["searchoptionsbuilder"]]],[11,"name","","",24,[[["self"],["str"]],["searchoptionsbuilder"]]],[11,"project_key_or_id","","",24,[[["self"],["str"]],["searchoptionsbuilder"]]],[11,"expand","","",24,[[["self"],["vec"]],["searchoptionsbuilder"]]],[11,"state","","",24,[[["self"],["str"]],["searchoptionsbuilder"]]],[11,"jql","","",24,[[["self"],["str"]],["searchoptionsbuilder"]]],[11,"validate_query","","",24,[[["self"],["bool"]],["searchoptionsbuilder"]]],[11,"build","","",24,[[["self"]],["searchoptions"]]],[0,"issues","","Interfaces for accessing and managing issues",N,N],[3,"Issues","goji::issues","issue options",N,N],[3,"Assignee","","",N,N],[12,"name","","",25,N],[3,"IssueType","","",N,N],[12,"id","","",26,N],[3,"Priority","","",N,N],[12,"id","","",27,N],[3,"Project","","",N,N],[12,"key","","",28,N],[3,"Component","","",N,N],[12,"name","","",29,N],[3,"Fields","","",N,N],[12,"assignee","","",30,N],[12,"components","","",30,N],[12,"description","","",30,N],[12,"environment","","",30,N],[12,"issuetype","","",30,N],[12,"priority","","",30,N],[12,"project","","",30,N],[12,"reporter","","",30,N],[12,"summary","","",30,N],[3,"CreateIssue","","",N,N],[12,"fields","","",31,N],[3,"CreateResponse","","",N,N],[12,"id","","",32,N],[12,"key","","",32,N],[12,"url","","",32,N],[3,"IssueResults","","",N,N],[12,"expand","","",33,N],[12,"max_results","","",33,N],[12,"start_at","","",33,N],[12,"total","","",33,N],[12,"issues","","",33,N],[3,"IssuesIter","","provides an iterator over multiple pages of search results",N,N],[11,"new","","",34,[[["jira"]],["issues"]]],[11,"get","","",34,[[["self"],["i"]],["result",["issue"]]]],[11,"create","","",34,[[["self"],["createissue"]],["result",["createresponse"]]]],[11,"list","","returns a single page of issues results https://docs.atlassian.com/jira-software/REST/latest/#agile/1.0/board-getIssuesForBoard",34,[[["self"],["board"],["searchoptions"]],["result",["issueresults"]]]],[11,"iter","","runs a type why may be used to iterate over consecutive pages of results https://docs.atlassian.com/jira-software/REST/latest/#agile/1.0/board-getIssuesForBoard",34,[[["self"],["board"],["searchoptions"]],["result",["issuesiter"]]]],[11,"field","goji","resolves a typed field from an issues lists of arbitrary fields",1,[[["self"],["str"]],["option",["result"]]]],[11,"assignee","","user assigned to issue",1,[[["self"]],["option",["user"]]]],[11,"creator","","user that created the issue",1,[[["self"]],["option",["user"]]]],[11,"reporter","","user that reported the issue",1,[[["self"]],["option",["user"]]]],[11,"status","","the current status of the issue",1,[[["self"]],["option",["status"]]]],[11,"summary","","brief summary of the issue",1,[[["self"]],["option",["string"]]]],[11,"description","","description of the issue",1,[[["self"]],["option",["string"]]]],[11,"updated","","updated timestamp",1,[[["self"]],["option",["string"]]]],[11,"created","","created timestamp",1,[[["self"]],["option",["string"]]]],[11,"resolution_date","","",1,[[["self"]],["option",["string"]]]],[11,"issue_type","","an issue type",1,[[["self"]],["option",["issuetype"]]]],[11,"labels","","labels associated with the issue",1,[[["self"]],["vec",["string"]]]],[11,"fix_versions","","list of versions associated with the issue",1,[[["self"]],["vec",["version"]]]],[11,"priority","","priority of the issue",1,[[["self"]],["option",["priority"]]]],[11,"links","","links to other issues",1,[[["self"]],["option",["result"]]]],[11,"project","","",1,[[["self"]],["option",["project"]]]],[11,"resolution","","",1,[[["self"]],["option",["resolution"]]]],[11,"attachment","","",1,[[["self"]],["vec",["attachment"]]]],[11,"comment","","",1,[[["self"]],["vec",["comment"]]]],[11,"permalink","","",1,[[["self"],["jira"]],["string"]]],[11,"new","","creates a new instance",18,[[["i"]],["transitiontriggeroptions"]]],[11,"builder","","",18,[[["i"]],["transitiontriggeroptionsbuilder"]]],[11,"new","","creates a new instance",19,[[["i"]],["transitiontriggeroptionsbuilder"]]],[11,"field","","appends a field to update as part of transition",19,[[["self"],["n"],["v"]],["transitiontriggeroptionsbuilder"]]],[11,"resolution","","updates resolution in transition",19,[[["self"],["r"]],["transitiontriggeroptionsbuilder"]]],[11,"build","","",19,[[["self"]],["transitiontriggeroptions"]]],[11,"new","","",35,[[["jira"]],["search"]]],[11,"list","","Returns a single page of search results",35,[[["self"],["j"],["searchoptions"]],["result",["searchresults"]]]],[11,"iter","","Return a type which may be used to iterate over consecutive pages of results",35,[[["self"],["j"],["searchoptions"]],["result",["iter"]]]],[11,"new","","",36,[[["jira"],["k"]],["transitions"]]],[11,"list","","return list of transitions options for this issue",36,[[["self"]],["result",["vec"]]]],[11,"trigger","","trigger a issue transition to transition with a resolution use TransitionTrigger::builder(id).resolution(name)",36,[[["self"],["transitiontriggeroptions"]],["result"]]],[0,"boards","","Interfaces for accessing and managing boards",N,N],[3,"Boards","goji::boards","",N,N],[3,"Board","","",N,N],[12,"self_link","","",37,N],[12,"id","","",37,N],[12,"name","","",37,N],[12,"type_name","","",37,N],[3,"BoardResults","","",N,N],[12,"max_results","","",38,N],[12,"start_at","","",38,N],[12,"is_last","","",38,N],[12,"values","","",38,N],[3,"BoardsIter","","Provides an iterator over multiple pages of search results",N,N],[11,"new","","",39,[[["jira"]],["boards"]]],[11,"get","","Get a single board",39,[[["self"],["i"]],["result",["board"]]]],[11,"list","","Returns a single page of board results",39,[[["self"],["searchoptions"]],["result",["boardresults"]]]],[11,"iter","","Returns a type which may be used to iterate over consecutive pages of results",39,[[["self"],["searchoptions"]],["result",["boardsiter"]]]],[0,"resolution","goji","Interfaces for accessing and managing resolutions",N,N],[3,"Resolution","goji::resolution","",N,N],[3,"Resolved","","",N,N],[12,"id","","",40,N],[12,"title","","",40,N],[12,"resolution_type","","",40,N],[12,"properties","","",40,N],[12,"additional_properties","","",40,N],[11,"new","","",41,[[["jira"]],["resolution"]]],[11,"get","","",41,[[["self"],["i"]],["result",["resolved"]]]],[0,"sprints","goji","Interfaces for accessing and managing sprints",N,N],[3,"Sprints","goji::sprints","",N,N],[3,"Sprint","","",N,N],[12,"id","","",42,N],[12,"self_link","","",42,N],[12,"name","","",42,N],[12,"state","","",42,N],[12,"start_date","","",42,N],[12,"end_date","","",42,N],[12,"complete_date","","",42,N],[12,"origin_board_id","","",42,N],[3,"SprintResults","","",N,N],[12,"max_results","","",43,N],[12,"start_at","","",43,N],[12,"is_last","","",43,N],[12,"values","","",43,N],[3,"SprintsIter","","provides an iterator over multiple pages of search results",N,N],[11,"new","","",44,[[["jira"]],["sprints"]]],[11,"list","","returns a single page of board results https://docs.atlassian.com/jira-software/REST/latest/#agile/1.0/board/{boardId}/sprint-getAllSprints",44,[[["self"],["board"],["searchoptions"]],["result",["sprintresults"]]]],[11,"move_issues","","move issues into sprint https://docs.atlassian.com/jira-software/REST/7.3.1/#agile/1.0/sprint-moveIssuesToSprint",44,[[["self"],["u64"],["vec",["string"]]],["result",["emptyresponse"]]]],[11,"iter","","runs a type why may be used to iterate over consecutive pages of results https://docs.atlassian.com/jira-software/REST/latest/#agile/1.0/board-getAllBoards",44,[[["self"],["board"],["searchoptions"]],["result",["sprintsiter"]]]],[6,"Result","goji","",N,N],[11,"new","","creates a new instance of a jira client",45,[[["h"],["credentials"]],["result",["jira"]]]],[11,"from_client","","creates a new instance of a jira client using a specified reqwest client",45,[[["h"],["credentials"],["client"]],["result",["jira"]]]],[11,"transitions","","return transitions interface",45,[[["self"],["k"]],["transitions"]]],[11,"search","","return search interface",45,[[["self"]],["search"]]],[11,"issues","","",45,[[["self"]],["issues"]]],[11,"boards","","",45,[[["self"]],["boards"]]],[11,"sprints","","",45,[[["self"]],["sprints"]]],[11,"from","","",23,[[["t"]],["t"]]],[11,"into","","",23,[[["self"]],["u"]]],[11,"to_owned","","",23,[[["self"]],["t"]]],[11,"clone_into","","",23,N],[11,"try_from","","",23,[[["u"]],["result"]]],[11,"borrow","","",23,[[["self"]],["t"]]],[11,"borrow_mut","","",23,[[["self"]],["t"]]],[11,"try_into","","",23,[[["self"]],["result"]]],[11,"get_type_id","","",23,[[["self"]],["typeid"]]],[11,"from","","",24,[[["t"]],["t"]]],[11,"into","","",24,[[["self"]],["u"]]],[11,"try_from","","",24,[[["u"]],["result"]]],[11,"borrow","","",24,[[["self"]],["t"]]],[11,"borrow_mut","","",24,[[["self"]],["t"]]],[11,"try_into","","",24,[[["self"]],["result"]]],[11,"get_type_id","","",24,[[["self"]],["typeid"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,N],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,N],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,N],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"from","","",12,[[["t"]],["t"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,N],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"from","","",14,[[["t"]],["t"]]],[11,"into","","",14,[[["self"]],["u"]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"try_into","","",14,[[["self"]],["result"]]],[11,"get_type_id","","",14,[[["self"]],["typeid"]]],[11,"from","","",15,[[["t"]],["t"]]],[11,"into","","",15,[[["self"]],["u"]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"try_into","","",15,[[["self"]],["result"]]],[11,"get_type_id","","",15,[[["self"]],["typeid"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"into","","",16,[[["self"]],["u"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"try_into","","",16,[[["self"]],["result"]]],[11,"get_type_id","","",16,[[["self"]],["typeid"]]],[11,"from","","",17,[[["t"]],["t"]]],[11,"into","","",17,[[["self"]],["u"]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"try_into","","",17,[[["self"]],["result"]]],[11,"get_type_id","","",17,[[["self"]],["typeid"]]],[11,"from","","",18,[[["t"]],["t"]]],[11,"into","","",18,[[["self"]],["u"]]],[11,"try_from","","",18,[[["u"]],["result"]]],[11,"borrow","","",18,[[["self"]],["t"]]],[11,"borrow_mut","","",18,[[["self"]],["t"]]],[11,"try_into","","",18,[[["self"]],["result"]]],[11,"get_type_id","","",18,[[["self"]],["typeid"]]],[11,"from","","",19,[[["t"]],["t"]]],[11,"into","","",19,[[["self"]],["u"]]],[11,"try_from","","",19,[[["u"]],["result"]]],[11,"borrow","","",19,[[["self"]],["t"]]],[11,"borrow_mut","","",19,[[["self"]],["t"]]],[11,"try_into","","",19,[[["self"]],["result"]]],[11,"get_type_id","","",19,[[["self"]],["typeid"]]],[11,"from","","",46,[[["t"]],["t"]]],[11,"into","","",46,[[["self"]],["u"]]],[11,"try_from","","",46,[[["u"]],["result"]]],[11,"borrow","","",46,[[["self"]],["t"]]],[11,"borrow_mut","","",46,[[["self"]],["t"]]],[11,"try_into","","",46,[[["self"]],["result"]]],[11,"get_type_id","","",46,[[["self"]],["typeid"]]],[11,"from","","",20,[[["t"]],["t"]]],[11,"into","","",20,[[["self"]],["u"]]],[11,"to_owned","","",20,[[["self"]],["t"]]],[11,"clone_into","","",20,N],[11,"try_from","","",20,[[["u"]],["result"]]],[11,"borrow","","",20,[[["self"]],["t"]]],[11,"borrow_mut","","",20,[[["self"]],["t"]]],[11,"try_into","","",20,[[["self"]],["result"]]],[11,"get_type_id","","",20,[[["self"]],["typeid"]]],[11,"from","","",35,[[["t"]],["t"]]],[11,"into","","",35,[[["self"]],["u"]]],[11,"try_from","","",35,[[["u"]],["result"]]],[11,"borrow","","",35,[[["self"]],["t"]]],[11,"borrow_mut","","",35,[[["self"]],["t"]]],[11,"try_into","","",35,[[["self"]],["result"]]],[11,"get_type_id","","",35,[[["self"]],["typeid"]]],[11,"from","","",36,[[["t"]],["t"]]],[11,"into","","",36,[[["self"]],["u"]]],[11,"try_from","","",36,[[["u"]],["result"]]],[11,"borrow","","",36,[[["self"]],["t"]]],[11,"borrow_mut","","",36,[[["self"]],["t"]]],[11,"try_into","","",36,[[["self"]],["result"]]],[11,"get_type_id","","",36,[[["self"]],["typeid"]]],[11,"from","","",47,[[["t"]],["t"]]],[11,"into","","",47,[[["self"]],["u"]]],[11,"try_from","","",47,[[["u"]],["result"]]],[11,"borrow","","",47,[[["self"]],["t"]]],[11,"borrow_mut","","",47,[[["self"]],["t"]]],[11,"try_into","","",47,[[["self"]],["result"]]],[11,"get_type_id","","",47,[[["self"]],["typeid"]]],[11,"from","","",45,[[["t"]],["t"]]],[11,"into","","",45,[[["self"]],["u"]]],[11,"to_owned","","",45,[[["self"]],["t"]]],[11,"clone_into","","",45,N],[11,"try_from","","",45,[[["u"]],["result"]]],[11,"borrow","","",45,[[["self"]],["t"]]],[11,"borrow_mut","","",45,[[["self"]],["t"]]],[11,"try_into","","",45,[[["self"]],["result"]]],[11,"get_type_id","","",45,[[["self"]],["typeid"]]],[11,"from","","",21,[[["t"]],["t"]]],[11,"into","","",21,[[["self"]],["u"]]],[11,"to_string","","",21,[[["self"]],["string"]]],[11,"try_from","","",21,[[["u"]],["result"]]],[11,"borrow","","",21,[[["self"]],["t"]]],[11,"borrow_mut","","",21,[[["self"]],["t"]]],[11,"try_into","","",21,[[["self"]],["result"]]],[11,"get_type_id","","",21,[[["self"]],["typeid"]]],[11,"from","","",22,[[["t"]],["t"]]],[11,"into","","",22,[[["self"]],["u"]]],[11,"to_owned","","",22,[[["self"]],["t"]]],[11,"clone_into","","",22,N],[11,"try_from","","",22,[[["u"]],["result"]]],[11,"borrow","","",22,[[["self"]],["t"]]],[11,"borrow_mut","","",22,[[["self"]],["t"]]],[11,"try_into","","",22,[[["self"]],["result"]]],[11,"get_type_id","","",22,[[["self"]],["typeid"]]],[11,"from","goji::issues","",34,[[["t"]],["t"]]],[11,"into","","",34,[[["self"]],["u"]]],[11,"try_from","","",34,[[["u"]],["result"]]],[11,"borrow","","",34,[[["self"]],["t"]]],[11,"borrow_mut","","",34,[[["self"]],["t"]]],[11,"try_into","","",34,[[["self"]],["result"]]],[11,"get_type_id","","",34,[[["self"]],["typeid"]]],[11,"from","","",25,[[["t"]],["t"]]],[11,"into","","",25,[[["self"]],["u"]]],[11,"to_owned","","",25,[[["self"]],["t"]]],[11,"clone_into","","",25,N],[11,"try_from","","",25,[[["u"]],["result"]]],[11,"borrow","","",25,[[["self"]],["t"]]],[11,"borrow_mut","","",25,[[["self"]],["t"]]],[11,"try_into","","",25,[[["self"]],["result"]]],[11,"get_type_id","","",25,[[["self"]],["typeid"]]],[11,"from","","",26,[[["t"]],["t"]]],[11,"into","","",26,[[["self"]],["u"]]],[11,"to_owned","","",26,[[["self"]],["t"]]],[11,"clone_into","","",26,N],[11,"try_from","","",26,[[["u"]],["result"]]],[11,"borrow","","",26,[[["self"]],["t"]]],[11,"borrow_mut","","",26,[[["self"]],["t"]]],[11,"try_into","","",26,[[["self"]],["result"]]],[11,"get_type_id","","",26,[[["self"]],["typeid"]]],[11,"from","","",27,[[["t"]],["t"]]],[11,"into","","",27,[[["self"]],["u"]]],[11,"to_owned","","",27,[[["self"]],["t"]]],[11,"clone_into","","",27,N],[11,"try_from","","",27,[[["u"]],["result"]]],[11,"borrow","","",27,[[["self"]],["t"]]],[11,"borrow_mut","","",27,[[["self"]],["t"]]],[11,"try_into","","",27,[[["self"]],["result"]]],[11,"get_type_id","","",27,[[["self"]],["typeid"]]],[11,"from","","",28,[[["t"]],["t"]]],[11,"into","","",28,[[["self"]],["u"]]],[11,"to_owned","","",28,[[["self"]],["t"]]],[11,"clone_into","","",28,N],[11,"try_from","","",28,[[["u"]],["result"]]],[11,"borrow","","",28,[[["self"]],["t"]]],[11,"borrow_mut","","",28,[[["self"]],["t"]]],[11,"try_into","","",28,[[["self"]],["result"]]],[11,"get_type_id","","",28,[[["self"]],["typeid"]]],[11,"from","","",29,[[["t"]],["t"]]],[11,"into","","",29,[[["self"]],["u"]]],[11,"to_owned","","",29,[[["self"]],["t"]]],[11,"clone_into","","",29,N],[11,"try_from","","",29,[[["u"]],["result"]]],[11,"borrow","","",29,[[["self"]],["t"]]],[11,"borrow_mut","","",29,[[["self"]],["t"]]],[11,"try_into","","",29,[[["self"]],["result"]]],[11,"get_type_id","","",29,[[["self"]],["typeid"]]],[11,"from","","",30,[[["t"]],["t"]]],[11,"into","","",30,[[["self"]],["u"]]],[11,"try_from","","",30,[[["u"]],["result"]]],[11,"borrow","","",30,[[["self"]],["t"]]],[11,"borrow_mut","","",30,[[["self"]],["t"]]],[11,"try_into","","",30,[[["self"]],["result"]]],[11,"get_type_id","","",30,[[["self"]],["typeid"]]],[11,"from","","",31,[[["t"]],["t"]]],[11,"into","","",31,[[["self"]],["u"]]],[11,"try_from","","",31,[[["u"]],["result"]]],[11,"borrow","","",31,[[["self"]],["t"]]],[11,"borrow_mut","","",31,[[["self"]],["t"]]],[11,"try_into","","",31,[[["self"]],["result"]]],[11,"get_type_id","","",31,[[["self"]],["typeid"]]],[11,"from","","",32,[[["t"]],["t"]]],[11,"into","","",32,[[["self"]],["u"]]],[11,"try_from","","",32,[[["u"]],["result"]]],[11,"borrow","","",32,[[["self"]],["t"]]],[11,"borrow_mut","","",32,[[["self"]],["t"]]],[11,"try_into","","",32,[[["self"]],["result"]]],[11,"get_type_id","","",32,[[["self"]],["typeid"]]],[11,"from","","",33,[[["t"]],["t"]]],[11,"into","","",33,[[["self"]],["u"]]],[11,"try_from","","",33,[[["u"]],["result"]]],[11,"borrow","","",33,[[["self"]],["t"]]],[11,"borrow_mut","","",33,[[["self"]],["t"]]],[11,"try_into","","",33,[[["self"]],["result"]]],[11,"get_type_id","","",33,[[["self"]],["typeid"]]],[11,"from","","",48,[[["t"]],["t"]]],[11,"into","","",48,[[["self"]],["u"]]],[11,"into_iter","","",48,[[["self"]],["i"]]],[11,"try_from","","",48,[[["u"]],["result"]]],[11,"borrow","","",48,[[["self"]],["t"]]],[11,"borrow_mut","","",48,[[["self"]],["t"]]],[11,"try_into","","",48,[[["self"]],["result"]]],[11,"get_type_id","","",48,[[["self"]],["typeid"]]],[11,"from","goji::boards","",39,[[["t"]],["t"]]],[11,"into","","",39,[[["self"]],["u"]]],[11,"try_from","","",39,[[["u"]],["result"]]],[11,"borrow","","",39,[[["self"]],["t"]]],[11,"borrow_mut","","",39,[[["self"]],["t"]]],[11,"try_into","","",39,[[["self"]],["result"]]],[11,"get_type_id","","",39,[[["self"]],["typeid"]]],[11,"from","","",37,[[["t"]],["t"]]],[11,"into","","",37,[[["self"]],["u"]]],[11,"to_owned","","",37,[[["self"]],["t"]]],[11,"clone_into","","",37,N],[11,"try_from","","",37,[[["u"]],["result"]]],[11,"borrow","","",37,[[["self"]],["t"]]],[11,"borrow_mut","","",37,[[["self"]],["t"]]],[11,"try_into","","",37,[[["self"]],["result"]]],[11,"get_type_id","","",37,[[["self"]],["typeid"]]],[11,"from","","",38,[[["t"]],["t"]]],[11,"into","","",38,[[["self"]],["u"]]],[11,"try_from","","",38,[[["u"]],["result"]]],[11,"borrow","","",38,[[["self"]],["t"]]],[11,"borrow_mut","","",38,[[["self"]],["t"]]],[11,"try_into","","",38,[[["self"]],["result"]]],[11,"get_type_id","","",38,[[["self"]],["typeid"]]],[11,"from","","",49,[[["t"]],["t"]]],[11,"into","","",49,[[["self"]],["u"]]],[11,"into_iter","","",49,[[["self"]],["i"]]],[11,"try_from","","",49,[[["u"]],["result"]]],[11,"borrow","","",49,[[["self"]],["t"]]],[11,"borrow_mut","","",49,[[["self"]],["t"]]],[11,"try_into","","",49,[[["self"]],["result"]]],[11,"get_type_id","","",49,[[["self"]],["typeid"]]],[11,"from","goji::resolution","",41,[[["t"]],["t"]]],[11,"into","","",41,[[["self"]],["u"]]],[11,"try_from","","",41,[[["u"]],["result"]]],[11,"borrow","","",41,[[["self"]],["t"]]],[11,"borrow_mut","","",41,[[["self"]],["t"]]],[11,"try_into","","",41,[[["self"]],["result"]]],[11,"get_type_id","","",41,[[["self"]],["typeid"]]],[11,"from","","",40,[[["t"]],["t"]]],[11,"into","","",40,[[["self"]],["u"]]],[11,"to_owned","","",40,[[["self"]],["t"]]],[11,"clone_into","","",40,N],[11,"try_from","","",40,[[["u"]],["result"]]],[11,"borrow","","",40,[[["self"]],["t"]]],[11,"borrow_mut","","",40,[[["self"]],["t"]]],[11,"try_into","","",40,[[["self"]],["result"]]],[11,"get_type_id","","",40,[[["self"]],["typeid"]]],[11,"from","goji::sprints","",44,[[["t"]],["t"]]],[11,"into","","",44,[[["self"]],["u"]]],[11,"try_from","","",44,[[["u"]],["result"]]],[11,"borrow","","",44,[[["self"]],["t"]]],[11,"borrow_mut","","",44,[[["self"]],["t"]]],[11,"try_into","","",44,[[["self"]],["result"]]],[11,"get_type_id","","",44,[[["self"]],["typeid"]]],[11,"from","","",42,[[["t"]],["t"]]],[11,"into","","",42,[[["self"]],["u"]]],[11,"to_owned","","",42,[[["self"]],["t"]]],[11,"clone_into","","",42,N],[11,"try_from","","",42,[[["u"]],["result"]]],[11,"borrow","","",42,[[["self"]],["t"]]],[11,"borrow_mut","","",42,[[["self"]],["t"]]],[11,"try_into","","",42,[[["self"]],["result"]]],[11,"get_type_id","","",42,[[["self"]],["typeid"]]],[11,"from","","",43,[[["t"]],["t"]]],[11,"into","","",43,[[["self"]],["u"]]],[11,"try_from","","",43,[[["u"]],["result"]]],[11,"borrow","","",43,[[["self"]],["t"]]],[11,"borrow_mut","","",43,[[["self"]],["t"]]],[11,"try_into","","",43,[[["self"]],["result"]]],[11,"get_type_id","","",43,[[["self"]],["typeid"]]],[11,"from","","",50,[[["t"]],["t"]]],[11,"into","","",50,[[["self"]],["u"]]],[11,"into_iter","","",50,[[["self"]],["i"]]],[11,"try_from","","",50,[[["u"]],["result"]]],[11,"borrow","","",50,[[["self"]],["t"]]],[11,"borrow_mut","","",50,[[["self"]],["t"]]],[11,"try_into","","",50,[[["self"]],["result"]]],[11,"get_type_id","","",50,[[["self"]],["typeid"]]],[11,"clone","goji","",23,[[["self"]],["searchoptions"]]],[11,"clone","goji::issues","",25,[[["self"]],["assignee"]]],[11,"clone","","",26,[[["self"]],["issuetype"]]],[11,"clone","","",27,[[["self"]],["priority"]]],[11,"clone","","",28,[[["self"]],["project"]]],[11,"clone","","",29,[[["self"]],["component"]]],[11,"clone","goji","",1,[[["self"]],["issue"]]],[11,"clone","","",6,[[["self"]],["changelog"]]],[11,"clone","","",7,[[["self"]],["history"]]],[11,"clone","","",8,[[["self"]],["historyitem"]]],[11,"clone","","",12,[[["self"]],["user"]]],[11,"clone","","",20,[[["self"]],["transition"]]],[11,"clone","goji::boards","",37,[[["self"]],["board"]]],[11,"clone","goji::resolution","",40,[[["self"]],["resolved"]]],[11,"clone","goji::sprints","",42,[[["self"]],["sprint"]]],[11,"clone","goji","",22,[[["self"]],["credentials"]]],[11,"clone","","",45,[[["self"]],["jira"]]],[11,"from","","",21,[[["serdeerror"]],["error"]]],[11,"from","","",21,[[["httperror"]],["error"]]],[11,"from","","",21,[[["ioerror"]],["error"]]],[11,"next","goji::issues","",48,[[["self"]],["option",["issue"]]]],[11,"next","goji::boards","",49,[[["self"]],["option",["board"]]]],[11,"next","goji::sprints","",50,[[["self"]],["option",["sprint"]]]],[11,"default","goji","",23,[[],["searchoptions"]]],[11,"default","","",24,[[],["searchoptionsbuilder"]]],[11,"fmt","","",21,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",23,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",24,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",21,[[["self"],["formatter"]],["result"]]],[11,"fmt","goji::issues","",34,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",25,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",26,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",27,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",28,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",29,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",30,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",31,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",32,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",33,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",48,[[["self"],["formatter"]],["result"]]],[11,"fmt","goji","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",7,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",8,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",12,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",13,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",14,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",15,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",16,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",17,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",18,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",46,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",20,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",35,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",36,[[["self"],["formatter"]],["result"]]],[11,"fmt","goji::boards","",39,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",37,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",38,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",49,[[["self"],["formatter"]],["result"]]],[11,"fmt","goji::resolution","",41,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",40,[[["self"],["formatter"]],["result"]]],[11,"fmt","goji::sprints","",44,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",42,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",43,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",50,[[["self"],["formatter"]],["result"]]],[11,"fmt","goji","",47,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",22,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",45,[[["self"],["formatter"]],["result"]]],[11,"description","","",21,[[["self"]],["str"]]],[11,"cause","","",21,[[["self"]],["option",["error"]]]],[11,"serialize","goji::issues","",25,[[["self"],["__s"]],["result"]]],[11,"serialize","","",26,[[["self"],["__s"]],["result"]]],[11,"serialize","","",27,[[["self"],["__s"]],["result"]]],[11,"serialize","","",28,[[["self"],["__s"]],["result"]]],[11,"serialize","","",29,[[["self"],["__s"]],["result"]]],[11,"serialize","","",30,[[["self"],["__s"]],["result"]]],[11,"serialize","","",31,[[["self"],["__s"]],["result"]]],[11,"serialize","goji","",18,[[["self"],["__s"]],["result"]]],[11,"serialize","","",46,[[["self"],["__s"]],["result"]]],[11,"serialize","","",20,[[["self"],["__s"]],["result"]]],[11,"deserialize","goji::issues","",32,[[["__d"]],["result"]]],[11,"deserialize","","",33,[[["__d"]],["result"]]],[11,"deserialize","goji","",0,[[["__d"]],["result"]]],[11,"deserialize","","",1,[[["__d"]],["result"]]],[11,"deserialize","","",2,[[["__d"]],["result"]]],[11,"deserialize","","",3,[[["__d"]],["result"]]],[11,"deserialize","","",4,[[["__d"]],["result"]]],[11,"deserialize","","",5,[[["__d"]],["result"]]],[11,"deserialize","","",6,[[["__d"]],["result"]]],[11,"deserialize","","",7,[[["__d"]],["result"]]],[11,"deserialize","","",8,[[["__d"]],["result"]]],[11,"deserialize","","",9,[[["__d"]],["result"]]],[11,"deserialize","","",10,[[["__d"]],["result"]]],[11,"deserialize","","",11,[[["__d"]],["result"]]],[11,"deserialize","","",12,[[["__d"]],["result"]]],[11,"deserialize","","",13,[[["__d"]],["result"]]],[11,"deserialize","","",14,[[["__d"]],["result"]]],[11,"deserialize","","",15,[[["__d"]],["result"]]],[11,"deserialize","","",16,[[["__d"]],["result"]]],[11,"deserialize","","",17,[[["__d"]],["result"]]],[11,"deserialize","","",46,[[["__d"]],["result"]]],[11,"deserialize","goji::boards","",37,[[["__d"]],["result"]]],[11,"deserialize","","",38,[[["__d"]],["result"]]],[11,"deserialize","goji::resolution","",40,[[["__d"]],["result"]]],[11,"deserialize","goji::sprints","",42,[[["__d"]],["result"]]],[11,"deserialize","","",43,[[["__d"]],["result"]]],[11,"deserialize","goji","",47,[[["__d"]],["result"]]]],"paths":[[3,"Errors"],[3,"Issue"],[3,"Attachment"],[3,"Comments"],[3,"Comment"],[3,"Visibility"],[3,"Changelog"],[3,"History"],[3,"HistoryItem"],[3,"IssueLink"],[3,"LinkType"],[3,"Version"],[3,"User"],[3,"Status"],[3,"SearchResults"],[3,"TransitionOption"],[3,"TransitionTo"],[3,"TransitionOptions"],[3,"TransitionTriggerOptions"],[3,"TransitionTriggerOptionsBuilder"],[3,"Transition"],[4,"Error"],[4,"Credentials"],[3,"SearchOptions"],[3,"SearchOptionsBuilder"],[3,"Assignee"],[3,"IssueType"],[3,"Priority"],[3,"Project"],[3,"Component"],[3,"Fields"],[3,"CreateIssue"],[3,"CreateResponse"],[3,"IssueResults"],[3,"Issues"],[3,"Search"],[3,"Transitions"],[3,"Board"],[3,"BoardResults"],[3,"Boards"],[3,"Resolved"],[3,"Resolution"],[3,"Sprint"],[3,"SprintResults"],[3,"Sprints"],[3,"Jira"],[3,"Resolution"],[3,"EmptyResponse"],[3,"IssuesIter"],[3,"BoardsIter"],[3,"SprintsIter"]]};
initSearch(searchIndex);