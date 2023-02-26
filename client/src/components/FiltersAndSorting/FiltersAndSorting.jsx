function FiltersAndSorting(props) {
	return (
		<div>
			{/* <button
				onClick={(e) => {
					props.handleClick(e);
				}}
			>
				Reload
			</button> */}
			<h3>Albafeticamente</h3>
			<select name="" id="">
				<option value="asc">Ascendentemente</option>
				<option value="des">Descendentemente</option>
			</select>
			<h3>temperamentos</h3>
			<select name="" id="">
				<option value="a">option 1</option>
				<option value="b">option 2</option>
				<option value="c">option 3</option>
				<option value="d">option 4</option>
			</select>
			<h3>Origen</h3>
			<select name="" id="" className="card-grid">
				<option value="db">Creados</option>
				<option value="api">existentes</option>
				<option value="all">All</option>
			</select>
		</div>
	);
}

export default FiltersAndSorting;
