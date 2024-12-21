import * as React from 'react';
import { FormControl, InputLabel, Select, OutlinedInput, Box, Chip, MenuItem, SelectChangeEvent } from '@mui/material';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight:ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}
const names = [
    'Filter Option 1',
    'Filter Option 2'
]
export default function MultiSelectChip() {
    const [filterName, setFilterName] = React.useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent<typeof filterName>) => {
        const { target : { value} } = event;
        setFilterName(
            typeof value === 'string' ? value.split(',') : value,
        )
    };
    return (
        <div>
            <FormControl sx={{ m: 1, width: 100 }}>
                <InputLabel id="demo-label"> MultiSelect</InputLabel>
                <Select
                    labelId="demo-label"
                    id="demo-multi-select"
                    multiple
                    value={filterName}
                    input={<OutlinedInput id="select-multiple" label="chip" />}
                    onChange={handleChange}
                    renderValue={(selected) => {
                        console.log(selected)
                        return <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    }}
                    >
                    console.log(names)
                    {
                        names.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}>
                                {name}
                            </MenuItem>
                        ))

                    }
                </Select>
            </FormControl>
        </div>
    )
}